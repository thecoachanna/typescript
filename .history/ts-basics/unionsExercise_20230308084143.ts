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
    name: string,
    
}