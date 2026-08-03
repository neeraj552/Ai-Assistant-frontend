export const fadeUp = {
    hidden:{
        opacity:0,
        y: 30,
        scale: .96
    },

    visible: {
        opacity: 1,
        y: 0,
        scale:1
    }
};

export const staggerContainer = {
    hidden: {},
    visible:{
        transition:{
            staggerChildren: 0.12,
            delayChildren:0.15
        }
    }
};