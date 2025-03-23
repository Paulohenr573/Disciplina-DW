import { useState } from "react";
import { useItemsStore } from "../store";

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const [query, setQuery] = useState("");
  
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar itens..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name} - R$ {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
