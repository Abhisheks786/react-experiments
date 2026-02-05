import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap gap-6 justify-center items-center bg-gray-50 p-6">

      <ProductCard
        name="Headphones"
        price="129"
        inStock={true}
        image="https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="Mechanical Keyboard"
        price="89"
        inStock={false}
        image="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="Smart Watch"
        price="199"
        inStock={true}
        image="https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="Wireless Mouse"
        price="49"
        inStock={true}
        image="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="Laptop"
        price="899"
        inStock={true}
        image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="Bluetooth Speaker"
        price="79"
        inStock={false}
        image="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80"
      />

      <ProductCard
        name="DSLR Camera"
        price="599"
        inStock={true}
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80"
      />

    </div>
  );
}

export default App;