function beautifyName(name, surname) {
  name = name.trim().toLowerCase();
  surname = surname.trim().toLowerCase();
  return((name.charAt(0).toUpperCase() + name.slice(1)) + " " + 
  (surname.charAt(0).toUpperCase() + surname.slice(1)));
}

beautifyName("      lUiS     ", "      fErNaNDeZ     ");

