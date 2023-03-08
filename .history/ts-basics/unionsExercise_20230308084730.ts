// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
highScore = 1
highScore = false

// Create an array called stuff that can be an array of numbers OR strings - cannot be an array mixed together
const stuff: number[] | string[] = [];

// Create a literal type called SkillLevel with 4 allowed values
type SkillLevel =
    "Beginner" | "Intermediate" | "Advanced" | "Expert"

// Create a type called SkiSchoolStudent
// Name must be a string
// Age must be a number
// Sport must be "ski" or "snowboard"
// Level must be value from SkillLevel
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel
}

// Define a type to represent RGB and HSL color
type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (RGB | HSL)[] = []

// Write a function that accept a single string or array of strings
