**React Lorem Ipsum Generator**

- This project is a simple React-based Lorem Ipsum Generator that generates a specified number of paragraphs of placeholder text for users. The application is interactive, allowing users to input the number of paragraphs they want and dynamically displaying the generated text.

**Features**:
Dynamic Paragraph Generation: Users can input a number between 1 and 8, and the app will generate that many paragraphs of text.

**Interactive Form**:

- Includes a form with a number input field and a submit button.
- Real-time state management ensures the form updates as the user types.
- Data Slicing: The app slices the imported data.js array based on the user's input to display only the requested number of paragraphs.
- Unique Keys for Rendering: Each paragraph is rendered with a unique key using nanoid to avoid rendering issues in React.

**Dependencies**:

- React: Core library for building the UI.
- nanoid: Used to generate unique keys for rendering the list of paragraphs.
- CSS: Styled with a custom App.css
