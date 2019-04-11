const testimonialEditor = props =>
  `<Testimonial image="${props.image || ""}" attribution="${props.attribution ||
    ""}">
  ${props.quote || ""}</Testimonial>`

export const testimonialEditorConfig = {
  // Internal id of the component
  id: "testimonial",
  // Visible label
  label: "Testimonial",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Image", name: "image", widget: "image", required: false },
    { label: "Quote", name: "quote", widget: "markdown" },
    { label: "Attribution", name: "attribution", widget: "markdown" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<Testimonial image="(\S+)" attribution="(\S+)">(\S+)<\/Testimonial>/g,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      image: match[1],
      attribution: match[2],
      quote: match[3],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function(props) {
    return testimonialEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(props) {
    return testimonialEditor(props)
  },
}
