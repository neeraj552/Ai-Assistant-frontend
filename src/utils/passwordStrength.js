export function getPasswordStrength(password){
    if(!password){
        return null;
    }
    let score = 0;

    if(password.length >=8)  score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;

    if(score <= 1){
        return {
            label:"Weak",
            color:"bg-red-500",
            text: "texted-red-400",
            width: "w-1/3",
        };
    }
     if (score <= 3) {
        return {
            label: "Medium",
            color: "bg-yellow-500",
            text: "text-yellow-400",
            width: "w-2/3",
        };
    }

    return {
        label: "Strong",
        color: "bg-green-500",
        text: "text-green-400",
        width: "w-full",
    };
}