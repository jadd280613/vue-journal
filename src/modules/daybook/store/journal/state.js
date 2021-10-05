export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123456
            date: new Date().toDateString(), // sat 23, julio
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolore voluptatum magnam quibusdam molestias animi tenetur',
            picture: null
        },
        {
            id: new Date().getTime() + 1000, // 123456
            date: new Date().toDateString(), // sat 23, julio
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolore voluptatum magnam quibusdam molestias animi tenetur',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, // 123456
            date: new Date().toDateString(), // sat 23, julio
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolore voluptatum magnam quibusdam molestias animi tenetur',
            picture: null
        }
    ]
})