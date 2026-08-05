import { getPasswordStrength } from "../utils/passwordStrength";

function PasswordStrength({ password }) {

    const strength = getPasswordStrength(password);

    if (!strength) return null;

    return (

        <div className="mt-3">

            <div
                className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-slate-700
                "
            >

                <div
                    className={`
                        h-full
                        rounded-full
                        transition-all
                        duration-300
                        ${strength.color}
                        ${strength.width}
                    `}
                />

            </div>

            <p
                className={`
                    mt-2
                    text-sm
                    font-medium
                    ${strength.text}
                `}
            >
                Password Strength: {strength.label}
            </p>

        </div>

    );

}

export default PasswordStrength;