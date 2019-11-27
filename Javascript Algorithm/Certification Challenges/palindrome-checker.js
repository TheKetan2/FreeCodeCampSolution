function palindrome(str) {
  // Good luck!

  return (
    str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "")
      .split("")
      .reverse()
      .join("") === str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "")
  );
}

palindrome("eye");
