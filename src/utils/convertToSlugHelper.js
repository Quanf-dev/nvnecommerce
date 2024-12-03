export function convertToSlugHelper(text) {
  const from =
    "ÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴáàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ";
  const to =
    "AAAAAAAAAAAAAAAAADEEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYaaaaaaaaaaaaaaaaadeeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuuuyyyyy";
  const mapping = {};
  for (let i = 0; i < from.length; i++) {
    mapping[from[i]] = to[i];
  }
  return text
    .split("")
    .map((char) => mapping[char] || char)
    .join("")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
