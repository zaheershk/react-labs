export function firstLetterUppercase(input: string) {
    const lowerCase = input.toLowerCase();
    return `${lowerCase.charAt(0).toUpperCase()}${lowerCase.slice(1)}`;
}