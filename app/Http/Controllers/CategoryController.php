<?php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // Lista svih kategorija
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    // Prikaz jedne kategorije
    public function show(Category $category)
    {
        return response()->json($category);
    }

    // Kreiranje nove kategorije
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|unique:categories,name',
        ]);

        $category = Category::create($fields);

        return response()->json($category, 201);
    }

    // Ažuriranje kategorije
    public function update(Request $request, Category $category)
    {
        $fields = $request->validate([
            'name' => 'required|string|unique:categories,name,' . $category->id,
        ]);

        $category->update($fields);

        return response()->json($category);
    }

    // Brisanje kategorije
    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json(['message' => 'Category deleted successfully']);
    }
}
