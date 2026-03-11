<div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Edit Slider</h2>

    {{-- Slider Update Form --}}
    <form action="{{ route('sliders.update', $slider->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        {{-- Slider Name Field --}}
        <div class="mb-4">
            <label for="slider_name" class="block text-gray-700">Slider Name</label>
            <input
                type="text"
                id="slider_name"
                name="slider_name"
                value="{{ old('slider_name', $slider->slider_name) }}"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {{-- Display error if validation fails for slider_name --}}
            @error('slider_name')
                <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>

        {{-- Image Upload Field --}}
        <div class="mb-4">
            <label for="image" class="block text-gray-700">Image</label>
            <input
                type="file"
                id="image"
                name="image"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {{-- Show image file name if available --}}
            @if ($slider->image)
                <p class="text-sm text-gray-500">{{ $slider->image }}</p>
            @endif
            {{-- Display error if validation fails for image --}}
            @error('image')
                <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>

        {{-- Status Field --}}
        <div class="mb-4">
            <label for="status" class="block text-gray-700">Active</label>
            <input
                type="checkbox"
                id="status"
                name="status"
                value="1"
                {{ old('status', $slider->status) ? 'checked' : '' }}
                class="rounded"
            />
            {{-- Display error if validation fails for status --}}
            @error('status')
                <span class="text-red-500 text-sm">{{ $message }}</span>
            @enderror
        </div>

        {{-- Submit Button --}}
        <div class="mt-6">
            <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Update Slider
            </button>
        </div>
    </form>

    {{-- Display Global Errors (General form validation errors) --}}
    @if ($errors->any())
        <div class="mt-4 text-red-500">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
</div>

