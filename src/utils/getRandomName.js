const names = [
    "Aarav", "Vivaan", "Aditya", "Krishna", "Arjun",
    "Kabir", "Shaurya", "Ishaan", "Rohan", "Yuvraj",
    "Anaya", "Diya", "Ira", "Meera", "Aanya",
    "Saanvi", "Ishita", "Riya", "Myra", "Avni",
    "Aryan", "Ved", "Om", "Lakshya", "Nikhil",
    "Priya", "Naina", "Kavya", "Tara", "Simran",
    "Raj", "Rahul", "Vikram", "Dev", "Manav",
    "Neha", "Pooja", "Anjali", "Shruti", "Rekha",
    "Sarthak", "Jay", "Siddharth", "Harsh", "Ritika",
    "Tanvi", "Nandini", "Amit", "Bhavna", "Alok"
  ];

  const lastNames = [
    "Sharma", "Verma", "Reddy", "Iyer", "Patel",
    "Singh", "Yadav", "Chowdhury", "Mishra", "Nair",
    "Mehta", "Kapoor", "Das", "Nagar", "Tripathi",
    "Shetty", "Jain", "Ghosh", "Menon", "Rana",
    "Bansal", "Rastogi", "Bhat", "Thakur", "Kulkarni",
    "Pandey", "Saxena", "Sethi", "Joshi", "Khan",
    "Qureshi", "Rao", "Banerjee", "Bhattacharya", "Agarwal",
    "Dutta", "Chatterjee", "Malhotra", "Tiwari", "Gupta",
    "Deshmukh", "Naidu", "Sinha", "Pillai", "Kaur",
    "Pathak", "Chavan", "Mittal", "Mahajan", "Lal"
  ];

  const youtubeComments = [
    "This deserves more views!",
    "Who’s watching this in 2025? 😂",
    "Pure nostalgia 😢",
    "I can't stop replaying this!",
    "This hit different 🔥",
    "Underrated gem 💎",
    "Goosebumps every time 🔥",
    "Anyone else vibing at 3AM?",
    "I miss this era so much 😭",
    "LEGENDARY 👑",
    "The algorithm finally did something right!",
    "This brings back so many memories 🥲",
    "Instant mood booster 😍",
    "Just found this… where have I been?!",
    "Banger alert 🚨"
  ];

  
export const getRandomName = () => {
    return `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

export const getRandomComments =() => {
    return youtubeComments[Math.floor(Math.random() * youtubeComments.length)];
  }