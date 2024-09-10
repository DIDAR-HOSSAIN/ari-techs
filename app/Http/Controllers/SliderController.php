<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Http\Requests\StoreSliderRequest;
use App\Http\Requests\UpdateSliderRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $query = Slider::query();

        if ($startDate && $endDate) {
            // Make sure to convert the string dates to DateTime objects
            $startDate = \Carbon\Carbon::createFromFormat('Y-m-d', $startDate)->startOfDay();
            $endDate = \Carbon\Carbon::createFromFormat('Y-m-d', $endDate)->endOfDay();

            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $sliders = $query->orderBy('id', 'desc')->latest()->get();


        return Inertia::render('Slider/IndexSlider', ['sliders' => $sliders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Slider/CreateSlider');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderRequest $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'slider_name' => 'required',
                'image' => 'required',
                'slider_status' => 'required',
            ]);

            // Check if validation fails
            if ($validator->fails()) {
                // Return validation errors as JSON response
                return back()->withErrors($validator)->withInput();
            }

        $data = $request->all();

        if ($user = Auth::user()) {
            // Access user properties safely
            $data['user_name'] = $user->name;
        } else {
            // Handle the case where there is no authenticated user
            // For example, you could set a default value or throw an exception
            throw new \Exception('User not authenticated');
        }

        // dd($data);

        // Define the path where the images will be saved
        $imagePath = public_path('Slider/images/');

        // Check if the directory exists, if not, create it
        if (!File::exists($imagePath)) {
            File::makeDirectory($imagePath, 0755, true);
        }

        // Initialize ImageManager without specifying the driver
        $manager = new ImageManager(new Driver());

        // Handle image
        if ($request->hasFile('image')) {
            $name_gen = hexdec(uniqid()) . '.' . $request->file('image')->getClientOriginalExtension();
            $img = $manager->read($request->file('image')->getRealPath())->resize(300, 300);
            $img->save($imagePath . $name_gen, 80);
            $data['image'] = 'Slider/images/' . $name_gen;
        }
        
        Slider::create($data);
    } catch (\Exception $e) {
            // Handle exceptions and return appropriate error response
            return back()->withErrors(['error' => $e->getMessage()])->withInput();
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Slider $slider)
    {
        return Inertia::render('Slider/SliderShow', ['slider' => $slider]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slider $slider)
    {
        // dd($slider);
        return Inertia::render('Slider/EditSlider', ['slider' => $slider]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        try {
            // Collect all data except image
            $data = $request->except('image');

            // Define the path where the images will be saved
            $imagePath = public_path('Slider/images/');

            // Check if the directory exists, if not, create it
            if (!File::exists($imagePath)) {
                File::makeDirectory($imagePath, 0755, true);
            }

            // Initialize ImageManager
            $manager = new ImageManager(new Driver());

            // Handle image
            if ($request->hasFile('image')) {
                // Delete the old image if exists
                if ($slider->image && File::exists(public_path($slider->image))) {
                    File::delete(public_path($slider->image));
                }

                // Process the new image
                $name_gen = hexdec(uniqid()) . '.' . $request->file('image')->getClientOriginalExtension();
                $img = $manager->read($request->file('image')->getRealPath())->resize(300, 300);
                $img->save($imagePath . $name_gen, 80);
                $data['image'] = 'Slider/images/' . $name_gen;
            } else {
                // If no new image is uploaded, keep the old image path
                $data['image'] = $slider->image;
            }

            // Update the slider with the new data
            $slider->update($data);

            // Redirect back with a success message
            return redirect()->route('sliders.index')->with('success', 'Slider updated successfully');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => $e->getMessage()])->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        $slider->delete();

        return redirect()->route('sliders.index')
        ->with('success', 'Slider deleted successfully');
    }
}
