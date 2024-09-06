<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use App\Http\Requests\StoreSliderRequest;
use App\Http\Requests\UpdateSliderRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
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

        // $query = Result::query();
        $query = Slider::all();

        if ($startDate && $endDate) {
            // Make sure to convert the string dates to DateTime objects
            $startDate = \Carbon\Carbon::createFromFormat('Y-m-d', $startDate)->startOfDay();
            $endDate = \Carbon\Carbon::createFromFormat('Y-m-d', $endDate)->endOfDay();

            $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $sliders = $query->orderBy('id', 'desc')->latest()->get();
        // dd($results);

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
        $request->validate([
            'slider_name' => 'required',
            'image' => 'required',
            'slider_status' => 'required',
        ]);

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
        return Inertia::render('Slider/EditSlider', ['slider' => $slider]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        $request->validate([
            'slider_name' => 'required',
            'image' => 'required',
            'slider_status' => 'required',
        ]);

        $slider->update($request->all());

        return redirect()->route('sliders.index')
        ->with('success', 'Slider updated successfully');
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
