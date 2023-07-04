export const setLanguageLocalStorage = (selectedLanguage: string) => {
  localStorage.setItem("language", selectedLanguage);
};

export const getLanguageFromLocalStorage = (): string | null => {
  return localStorage.getItem("language");
};

export const navigationLinks = [
  { href: "/", id: "header.home.title" },
  { href: "/about", id: "header.link.about" },
  { href: "/contact", id: "header.link.contact" },
];
