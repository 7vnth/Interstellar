const config = {
  challenge: true, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "gointerstellar.app": "",
    localhost: "9987",
  },
  users: {
    // You can add multiple users by doing username: 'password'.
    // interstellar: "password",
    admin: "supersecure$321",
    guest: "super",
    system: "totallysecure$123",
    root: "treeroots$213",
    biome: "biomejs$312",
  },
};

export default config;
