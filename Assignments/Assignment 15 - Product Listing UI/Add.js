const [category, setCategory] = useState("all");

const filteredProducts =
  category === "all"
    ? products
    : products.filter(p => p.category === category);