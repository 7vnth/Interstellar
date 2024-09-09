const config = {
  challenge: true, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "gointerstellar.app": "",
    localhost: "9997",
  },
  users: {
    // You can add multiple users by doing username: 'password'.
    // interstellar: "password",
    admin: "playstation$447",
    guest: "super",
  },
};

export default config;
