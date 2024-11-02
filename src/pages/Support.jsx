const childrenInNeed = [
  { id: 1, name: "John Doe", age: 10, need: "School Supplies" },
  { id: 2, name: "Jane Smith", age: 8, need: "Medical Treatment" },
  { id: 3, name: "Sam Johnson", age: 12, need: "Food and Clothing" },
];

const Support = () => {
  return (
    <div>
      <h1>Support Page</h1>
      <p>
        Here is a list of children that need your help. Please consider making a
        donation.
      </p>
      <ul>
        {childrenInNeed.map((child) => (
          <li key={child.id}>
            <h2>{child.name}</h2>
            <p>Age: {child.age}</p>
            <p>Need: {child.need}</p>
            <button>Donate</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Support;
