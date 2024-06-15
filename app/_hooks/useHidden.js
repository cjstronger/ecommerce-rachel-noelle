export default function useHidden(value, names) {
  names.forEach((name) => {
    const fields = document.getElementsByName(name);
    fields.forEach((field) => {
      if (value === true) field.setAttribute("hidden", true);
      else field.removeAttribute("hidden");
    });
  });
}
