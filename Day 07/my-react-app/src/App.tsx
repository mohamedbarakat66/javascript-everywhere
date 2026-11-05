// import StarRating from './rating/StarRating';

// export default function RatingExamples() {
//   const examples = [
//     { value: 3, max: 5 },
//     { value: 5, max: 5 },
//     { value: 0, max: 5 },
//     { value: 2.5, max: 5 },
//     { value: 4, max: 10 },
//     { value: NaN, max: 5 },       
//     { value: Infinity, max: 5 },  
//     { value: 3, max: -2 },        
//   ];

//   return (
//     <div style={{ padding: '20px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: '15px' }}>
//       <h2>Star Rating - 8 Examples</h2>
//       {examples.map((ex, index) => (
//         <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//           <span>Example {index + 1} (value: {String(ex.value)}, max: {String(ex.max)}): </span>
//           <StarRating value={ex.value} max={ex.max} />
//         </div>
//       ))}
//     </div>
//   );
// }

// import ProductCatalog from "./catalog/ProductCatalog";

// export default function App() {
//   const sampleProducts = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 1200, isSoldOut: false },
//     { id: 2, name: "Headphones", category: "Electronics", price: 150, isSoldOut: true },
//     { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 80, isSoldOut: false },
//     { id: 4, name: "Blender", category: "Home Appliances", price: 80, isSoldOut: false },
//     { id: 5, name: "Running Shoes", category: "Sports", price: 90, isSoldOut: true },
//     { id: 6, name: "Yoga Mat", category: "Sports", price: 25, isSoldOut: false },
//   ];

//   const sectionStyle = { marginBottom: "30px" };
//   const dividerStyle = { margin: "20px 0" };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         fontFamily: "sans-serif",
//         maxWidth: "800px",
//         margin: "0 auto",
//       }}
//     >
//       <h1>Product Catalog Examples</h1>

//       <hr style={dividerStyle} />

//       <section style={sectionStyle}>
//         <h3>Example 1: Full Catalog</h3>
//         <ProductCatalog products={sampleProducts} />
//       </section>

//       <hr style={dividerStyle} />

//       <section style={sectionStyle}>
//         <h3>Example 2: Hide Sold Out Items</h3>
//         <ProductCatalog
//           products={sampleProducts}
//           hideSoldOut
//         />
//       </section>

//       <hr style={dividerStyle} />

//       <section style={sectionStyle}>
//         <h3>Example 3: Sorted By Price</h3>
//         <ProductCatalog
//           products={sampleProducts}
//           sortByPrice
//         />
//       </section>

//       <hr style={dividerStyle} />

//       <section style={sectionStyle}>
//         <h3>Example 4: Empty Catalog</h3>
//         <ProductCatalog products={[]} />
//       </section>

//       <hr style={dividerStyle} />

//       <section style={sectionStyle}>
//         <h3>Example 5: All Items Sold Out</h3>
//         <ProductCatalog
//           products={[
//             {
//               id: 7,
//               name: "Old Item",
//               category: "Archive",
//               price: 10,
//               isSoldOut: true,
//             },
//           ]}
//           hideSoldOut
//         />
//       </section>
//     </div>
//   );
// }

// import ShoppingList from "./shopping/ShoppingList";

// export default function App() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <ShoppingList />
//     </div>
//   );
// }

import TaskBoard from "./task-board/TaskBoard";

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <TaskBoard />
    </div>
  );
}
