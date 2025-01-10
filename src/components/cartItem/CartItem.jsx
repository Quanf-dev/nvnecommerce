import { Trash } from "lucide-react";
import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import AmountSelector from "../amountSelector/AmountSelector";

const CartItem = ({ item, incrementCart, decrementCart, deleteCart }) => {
  const { id, name, new_price, images, product_category, quantity } = item;
  const handleAmountChange = (newAmount) => {
    if (newAmount > quantity) {
      incrementCart(id);
    } else if (newAmount < quantity) {
      decrementCart(id);
    }
  };
  return (
    <tr className="border-b">
      <td className="flex items-center px-4 py-3">
        <AdvancedImage
          cldImg={getCloudinaryImage(images.images_desc[1], 200)}
          alt={name}
          className="object-contain w-24 h-24 rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-sm font-semibold text-black">{name}</h3>
          <p className="text-sm text-gray-500">{product_category}</p>
        </div>
      </td>

      <td className="px-4 py-3">
        <AmountSelector amount={quantity} onAmountChange={handleAmountChange} />
      </td>

      <td className="px-4 py-3 text-sm font-medium text-gray-900">
        đ{new_price}
      </td>

      <td
        className="px-4 py-3 text-sm text-red-500 cursor-pointer"
        onClick={() => deleteCart(item)}
      >
        <div className="flex items-center space-x-2">
          <Trash size={14} />
          <span className="text-xs font-medium">Xóa</span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
