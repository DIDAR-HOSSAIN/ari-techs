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
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
        $slider = $request->all();

        if ($image = $request->file('image')) {
            $destinationPath = 'images/slider_images';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $slider['image'] = "$profileImage";
        }

        Slider::create($slider);

        return redirect()->route('sliders.index')
        ->with('success', 'Slider created successfully.');
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
        // return Inertia::render('Slider/EditSlider', [
        //     'slider' => $slider
        // ]);

        return view('sliderEdit', compact('slider'));
        // return Inertia::render('Slider/EditSlider', compact('slider'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'slider_name' => 'nullable|string|max:255',
            'status' => 'nullable|in:0,1',  // Ensure status is 0 or 1
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Set a default value for 'status' if it's missing in the request
        $status = $request->input('status', $slider->status);  // Keep current status if not provided

        // Update slider fields
        $slider->update([
            'slider_name' => $validatedData['slider_name'] ?? $slider->slider_name,
            'status' => $status
        ]);

        // Handle image update if an image is provided
        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($slider->image) {
                // Delete old image from public/slider_images folder
                if (file_exists(public_path('slider_images/' . $slider->image))) {
                    unlink(public_path('slider_images/' . $slider->image));
                }
            }

            // Store the new image directly in the public/slider_images folder
            $imageName = time() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('slider_images'), $imageName);

            // Update slider's image field with just the image name
            $slider->image = $imageName;
            $slider->save();
        }

        // Redirect back with success message
        return redirect()->route('sliders.index')->with('success', 'Slider updated successfully!');
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
