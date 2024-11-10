// import React, { useRef } from "react";

// const Test: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);

//   const applyCommand = (command: string, value: string | null = null) => {
//     document.execCommand(command, false, value);
//   };

//   const handleLink = () => {
//     const url = prompt("Enter the URL");
//     if (url) applyCommand("createLink", url);
//   };

//   const handleImage = () => {
//     const url = prompt("Enter the Image URL");
//     if (url) applyCommand("insertImage", url);
//   };

//   const handleColorChange = (color: string) => {
//     applyCommand("foreColor", color);
//   };

//   const handleTableInsert = () => {
//     const rows = prompt("Enter the number of rows:");
//     const cols = prompt("Enter the number of columns:");

//     if (rows && cols) {
//       const tableHtml = generateTableHTML(parseInt(rows), parseInt(cols));
//       insertHTMLAtCursor(tableHtml);
//     }
//   };

//   const generateTableHTML = (rows: number, cols: number) => {
//     let tableHtml =
//       '<table border="1" style="border-collapse: collapse; width: 100%;">';
//     for (let i = 0; i < rows; i++) {
//       tableHtml += "<tr>";
//       for (let j = 0; j < cols; j++) {
//         tableHtml +=
//           '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
//       }
//       tableHtml += "</tr>";
//     }
//     tableHtml += "</table>";
//     return tableHtml;
//   };

//   const insertHTMLAtCursor = (html: string) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand("insertHTML", false, html);
//     }
//   };

//   const handleSubmit = () => {
//     const content = editorRef.current?.innerHTML;
//     console.log("Editor Content:", content);
//   };

//   return (
//     <div className="border border-gray-300 p-4 rounded-lg">
//       {/* Toolbar */}
//       <div className="flex flex-wrap items-center space-x-2 mb-4 border-b pb-2">
//         {/* Font Size */}
//         <button
//           onClick={() => applyCommand("fontSize", "3")}
//           className="p-1 border rounded"
//         >
//           Normal
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "5")}
//           className="p-1 border rounded"
//         >
//           Large
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "1")}
//           className="p-1 border rounded"
//         >
//           Small
//         </button>

//         {/* Bold, Italic, Underline */}
//         <button
//           onClick={() => applyCommand("bold")}
//           className="p-1 border rounded font-bold"
//         >
//           B
//         </button>
//         <button
//           onClick={() => applyCommand("italic")}
//           className="p-1 border rounded italic"
//         >
//           I
//         </button>
//         <button
//           onClick={() => applyCommand("underline")}
//           className="p-1 border rounded underline"
//         >
//           U
//         </button>

//         {/* Text Color */}
//         <select
//           onChange={(e) => handleColorChange(e.target.value)}
//           className="border p-1 rounded"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Color
//           </option>
//           <option value="black">Black</option>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>

//         {/* Link and Image */}
//         <button onClick={handleLink} className="p-1 border rounded">
//           Link
//         </button>
//         <button onClick={handleImage} className="p-1 border rounded">
//           Image
//         </button>

//         {/* Lists */}
//         <button
//           onClick={() => applyCommand("insertUnorderedList")}
//           className="p-1 border rounded"
//         >
//           • List
//         </button>
//         <button
//           onClick={() => applyCommand("insertOrderedList")}
//           className="p-1 border rounded"
//         >
//           1. List
//         </button>

//         {/* Text Alignment */}
//         <button
//           onClick={() => applyCommand("justifyLeft")}
//           className="p-1 border rounded"
//         >
//           Left
//         </button>
//         <button
//           onClick={() => applyCommand("justifyCenter")}
//           className="p-1 border rounded"
//         >
//           Center
//         </button>
//         <button
//           onClick={() => applyCommand("justifyRight")}
//           className="p-1 border rounded"
//         >
//           Right
//         </button>

//         {/* Table */}
//         <button onClick={handleTableInsert} className="p-1 border rounded">
//           Table
//         </button>
//       </div>

//       {/* Editable Content */}
//       <div
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning
//         className="editor-container border border-gray-300 p-2 min-h-[200px] rounded-lg focus:outline-none"
//       ></div>

//       {/* Output for debugging */}
//       <button
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Test;
// ================================================================================
// import React, { useRef } from "react";

// const Test: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);

//   const applyCommand = (command: string, value: string | null = null) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand(command, false, value);
//     }
//   };

//   const handleLink = () => {
//     const url = prompt("Enter the URL");
//     if (url) applyCommand("createLink", url);
//   };

//   const handleImage = () => {
//     const url = prompt("Enter the Image URL");
//     if (url) applyCommand("insertImage", url);
//   };

//   const handleColorChange = (color: string) => {
//     applyCommand("foreColor", color);
//   };

//   const handleTableInsert = () => {
//     const rows = prompt("Enter the number of rows:");
//     const cols = prompt("Enter the number of columns:");

//     if (rows && cols) {
//       const tableHtml = generateTableHTML(parseInt(rows), parseInt(cols));
//       insertHTMLAtCursor(tableHtml);
//     }
//   };

//   const generateTableHTML = (rows: number, cols: number) => {
//     let tableHtml =
//       '<table border="1" style="border-collapse: collapse; width: 100%;">';
//     for (let i = 0; i < rows; i++) {
//       tableHtml += "<tr>";
//       for (let j = 0; j < cols; j++) {
//         tableHtml +=
//           '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
//       }
//       tableHtml += "</tr>";
//     }
//     tableHtml += "</table>";
//     return tableHtml;
//   };

//   const insertHTMLAtCursor = (html: string) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand("insertHTML", false, html);
//     }
//   };

//   const handleSubmit = () => {
//     const content = editorRef.current?.innerHTML;
//     console.log("Editor Content:", content);
//   };

//   return (
//     <div className="border border-gray-300 p-4 rounded-lg">
//       {/* Toolbar */}
//       <div className="flex flex-wrap items-center space-x-2 mb-4 border-b pb-2">
//         {/* Font Size */}
//         <button
//           onClick={() => applyCommand("fontSize", "3")}
//           className="p-1 border rounded"
//         >
//           Normal
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "5")}
//           className="p-1 border rounded"
//         >
//           Large
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "1")}
//           className="p-1 border rounded"
//         >
//           Small
//         </button>

//         {/* Bold, Italic, Underline */}
//         <button
//           onClick={() => applyCommand("bold")}
//           className="p-1 border rounded font-bold"
//         >
//           B
//         </button>
//         <button
//           onClick={() => applyCommand("italic")}
//           className="p-1 border rounded italic"
//         >
//           I
//         </button>
//         <button
//           onClick={() => applyCommand("underline")}
//           className="p-1 border rounded underline"
//         >
//           U
//         </button>

//         {/* Text Color */}
//         <select
//           onChange={(e) => handleColorChange(e.target.value)}
//           className="border p-1 rounded"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Color
//           </option>
//           <option value="black">Black</option>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>

//         {/* Link and Image */}
//         <button onClick={handleLink} className="p-1 border rounded">
//           Link
//         </button>
//         <button onClick={handleImage} className="p-1 border rounded">
//           Image
//         </button>

//         {/* Lists */}
//         <button
//           onClick={() => applyCommand("insertUnorderedList")}
//           className="p-1 border rounded"
//         >
//           • List
//         </button>
//         <button
//           onClick={() => applyCommand("insertOrderedList")}
//           className="p-1 border rounded"
//         >
//           1. List
//         </button>

//         {/* Text Alignment */}
//         <button
//           onClick={() => applyCommand("justifyLeft")}
//           className="p-1 border rounded"
//         >
//           Left
//         </button>
//         <button
//           onClick={() => applyCommand("justifyCenter")}
//           className="p-1 border rounded"
//         >
//           Center
//         </button>
//         <button
//           onClick={() => applyCommand("justifyRight")}
//           className="p-1 border rounded"
//         >
//           Right
//         </button>

//         {/* Table */}
//         <button onClick={handleTableInsert} className="p-1 border rounded">
//           Table
//         </button>
//       </div>

//       {/* Editable Content */}
//       <div
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning
//         className="editor-container border border-gray-300 p-2 min-h-[200px] rounded-lg focus:outline-none"
//       ></div>

//       {/* Output for debugging */}
//       <button
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Test;
// ==================================================================
// import React, { useRef } from "react";

// const Test: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);

//   const applyCommand = (command: string, value: string | null = null) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand(command, false, value);
//     }
//   };

//   const handleLink = () => {
//     const url = prompt("Enter the URL");
//     if (url) applyCommand("createLink", url);
//   };

//   const handleImage = () => {
//     const url = prompt("Enter the Image URL");
//     if (url) applyCommand("insertImage", url);
//   };

//   const handleColorChange = (color: string) => {
//     applyCommand("foreColor", color);
//   };

//   const handleTableInsert = () => {
//     const rows = prompt("Enter the number of rows:");
//     const cols = prompt("Enter the number of columns:");

//     if (rows && cols) {
//       const tableHtml = generateTableHTML(parseInt(rows), parseInt(cols));
//       insertHTMLAtCursor(tableHtml);
//     }
//   };

//   const generateTableHTML = (rows: number, cols: number) => {
//     let tableHtml =
//       '<table border="1" style="border-collapse: collapse; width: 100%;">';
//     for (let i = 0; i < rows; i++) {
//       tableHtml += "<tr>";
//       for (let j = 0; j < cols; j++) {
//         tableHtml +=
//           '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
//       }
//       tableHtml += "</tr>";
//     }
//     tableHtml += "</table>";
//     return tableHtml;
//   };

//   const insertHTMLAtCursor = (html: string) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand("insertHTML", false, html);
//     }
//   };

//   const handleSubmit = () => {
//     const content = editorRef.current?.innerHTML;
//     console.log("Editor Content:", content);
//   };

//   const handleList = (isOrdered: boolean) => {
//     const listItemsInput = prompt("Enter the list items separated by commas");
//     if (listItemsInput) {
//       const listItems = listItemsInput.split(",").map((item) => item.trim());

//       let listHTML = "";
//       if (isOrdered) {
//         listHTML = listItems
//           .map((item, index) => `<div>${index + 1}. ${item}</div>`)
//           .join("");
//       } else {
//         listHTML = listItems.map((item) => `<div>• ${item}</div>`).join("");
//       }

//       insertHTMLAtCursor(listHTML);
//     }
//   };

//   return (
//     <div className="border border-gray-300 p-4 rounded-lg">
//       {/* Toolbar */}
//       <div className="flex flex-wrap items-center space-x-2 mb-4 border-b pb-2">
//         {/* Font Size */}
//         <button
//           onClick={() => applyCommand("fontSize", "3")}
//           className="p-1 border rounded"
//         >
//           Normal
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "5")}
//           className="p-1 border rounded"
//         >
//           Large
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "1")}
//           className="p-1 border rounded"
//         >
//           Small
//         </button>

//         {/* Bold, Italic, Underline */}
//         <button
//           onClick={() => applyCommand("bold")}
//           className="p-1 border rounded font-bold"
//         >
//           B
//         </button>
//         <button
//           onClick={() => applyCommand("italic")}
//           className="p-1 border rounded italic"
//         >
//           I
//         </button>
//         <button
//           onClick={() => applyCommand("underline")}
//           className="p-1 border rounded underline"
//         >
//           U
//         </button>

//         {/* Text Color */}
//         <select
//           onChange={(e) => handleColorChange(e.target.value)}
//           className="border p-1 rounded"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Color
//           </option>
//           <option value="black">Black</option>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>

//         {/* Link and Image */}
//         <button onClick={handleLink} className="p-1 border rounded">
//           Link
//         </button>
//         <button onClick={handleImage} className="p-1 border rounded">
//           Image
//         </button>

//         {/* Lists */}
//         <button
//           onClick={() => handleList(false)} // Unordered list
//           className="p-1 border rounded"
//         >
//           • List
//         </button>
//         <button
//           onClick={() => handleList(true)} // Ordered list
//           className="p-1 border rounded"
//         >
//           1. List
//         </button>

//         {/* Text Alignment */}
//         <button
//           onClick={() => applyCommand("justifyLeft")}
//           className="p-1 border rounded"
//         >
//           Left
//         </button>
//         <button
//           onClick={() => applyCommand("justifyCenter")}
//           className="p-1 border rounded"
//         >
//           Center
//         </button>
//         <button
//           onClick={() => applyCommand("justifyRight")}
//           className="p-1 border rounded"
//         >
//           Right
//         </button>

//         {/* Table */}
//         <button onClick={handleTableInsert} className="p-1 border rounded">
//           Table
//         </button>
//       </div>

//       {/* Editable Content */}
//       <div
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning
//         className="editor-container border border-gray-300 p-2 min-h-[200px] rounded-lg focus:outline-none"
//       ></div>

//       {/* Output for debugging */}
//       <button
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Test;
// ==============================================================

// import React, { useRef } from "react";

// const Test: React.FC = () => {
//   const editorRef = useRef<HTMLDivElement>(null);

//   const applyCommand = (command: string, value: string | null = null) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand(command, false, value);
//     }
//   };

//   const handleLink = () => {
//     const url = prompt("Enter the URL");
//     if (url) applyCommand("createLink", url);
//   };

//   const handleImage = () => {
//     const url = prompt("Enter the Image URL");
//     if (url) applyCommand("insertImage", url);
//   };

//   const handleColorChange = (color: string) => {
//     applyCommand("foreColor", color);
//   };

//   const handleTableInsert = () => {
//     const rows = prompt("Enter the number of rows:");
//     const cols = prompt("Enter the number of columns:");

//     if (rows && cols) {
//       const tableHtml = generateTableHTML(parseInt(rows), parseInt(cols));
//       insertHTMLAtCursor(tableHtml);
//     }
//   };

//   const generateTableHTML = (rows: number, cols: number) => {
//     let tableHtml =
//       '<table border="1" style="border-collapse: collapse; width: 100%;">';
//     for (let i = 0; i < rows; i++) {
//       tableHtml += "<tr>";
//       for (let j = 0; j < cols; j++) {
//         tableHtml +=
//           '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
//       }
//       tableHtml += "</tr>";
//     }
//     tableHtml += "</table>";
//     return tableHtml;
//   };

//   const insertHTMLAtCursor = (html: string) => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//       document.execCommand("insertHTML", false, html);
//     }
//   };

//   const handleSubmit = () => {
//     const content = editorRef.current?.innerHTML;
//     console.log("Editor Content:", content);
//   };

//   const handleList = (isOrdered: boolean) => {
//     const listItemsInput = prompt("Enter the list items separated by commas");
//     if (listItemsInput) {
//       const listItems = listItemsInput.split(",").map((item) => item.trim());

//       let listHTML = "";
//       if (isOrdered) {
//         listHTML = listItems
//           .map((item, index) => `<div>${index + 1}. ${item}</div>`)
//           .join("");
//       } else {
//         listHTML = listItems.map((item) => `<div>• ${item}</div>`).join("");
//       }

//       insertHTMLAtCursor(listHTML);
//     }
//   };

//   // Handle Text Alignment (Left, Center, Right)
//   const handleTextAlign = (alignment: "left" | "center" | "right") => {
//     document.execCommand(
//       "justify" + alignment.charAt(0).toUpperCase() + alignment.slice(1)
//     );
//   };

//   return (
//     <div className="border border-gray-300 p-4 rounded-lg">
//       {/* Toolbar */}
//       <div className="flex flex-wrap items-center space-x-2 mb-4 border-b pb-2">
//         {/* Font Size */}
//         <button
//           onClick={() => applyCommand("fontSize", "3")}
//           className="p-1 border rounded"
//         >
//           Normal
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "5")}
//           className="p-1 border rounded"
//         >
//           Large
//         </button>
//         <button
//           onClick={() => applyCommand("fontSize", "1")}
//           className="p-1 border rounded"
//         >
//           Small
//         </button>

//         {/* Bold, Italic, Underline */}
//         <button
//           onClick={() => applyCommand("bold")}
//           className="p-1 border rounded font-bold"
//         >
//           B
//         </button>
//         <button
//           onClick={() => applyCommand("italic")}
//           className="p-1 border rounded italic"
//         >
//           I
//         </button>
//         <button
//           onClick={() => applyCommand("underline")}
//           className="p-1 border rounded underline"
//         >
//           U
//         </button>

//         {/* Text Color */}
//         <select
//           onChange={(e) => handleColorChange(e.target.value)}
//           className="border p-1 rounded"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Color
//           </option>
//           <option value="black">Black</option>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>

//         {/* Link and Image */}
//         <button onClick={handleLink} className="p-1 border rounded">
//           Link
//         </button>
//         <button onClick={handleImage} className="p-1 border rounded">
//           Image
//         </button>

//         {/* Lists */}
//         <button
//           onClick={() => handleList(false)} // Unordered list
//           className="p-1 border rounded"
//         >
//           • List
//         </button>
//         <button
//           onClick={() => handleList(true)} // Ordered list
//           className="p-1 border rounded"
//         >
//           1. List
//         </button>

//         {/* Text Alignment */}
//         <button
//           onClick={() => handleTextAlign("left")}
//           className="p-1 border rounded"
//         >
//           Left
//         </button>
//         <button
//           onClick={() => handleTextAlign("center")}
//           className="p-1 border rounded"
//         >
//           Center
//         </button>
//         <button
//           onClick={() => handleTextAlign("right")}
//           className="p-1 border rounded"
//         >
//           Right
//         </button>

//         {/* Table */}
//         <button onClick={handleTableInsert} className="p-1 border rounded">
//           Table
//         </button>
//       </div>

//       {/* Editable Content */}
//       <div
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning
//         className="editor-container border border-gray-300 p-2 min-h-[200px] rounded-lg focus:outline-none"
//       ></div>

//       {/* Output for debugging */}
//       <button
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Test;
import React, { useRef } from "react";

const Test: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const applyCommand = (command: string, value: string | null = null) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, value);
    }
  };

  const handleLink = () => {
    const url = prompt("Enter the URL");
    if (url) applyCommand("createLink", url);
  };

  const handleImage = () => {
    const url = prompt("Enter the Image URL");
    if (url) applyCommand("insertImage", url);
  };

  const handleColorChange = (color: string) => {
    applyCommand("foreColor", color);
  };

  const handleTableInsert = () => {
    const rows = prompt("Enter the number of rows:");
    const cols = prompt("Enter the number of columns:");

    if (rows && cols) {
      const tableHtml = generateTableHTML(parseInt(rows), parseInt(cols));
      insertHTMLAtCursor(tableHtml);
    }
  };

  const generateTableHTML = (rows: number, cols: number) => {
    let tableHtml =
      '<table border="1" style="border-collapse: collapse; width: 100%;">';
    for (let i = 0; i < rows; i++) {
      tableHtml += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHtml +=
          '<td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>';
      }
      tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    return tableHtml;
  };

  const insertHTMLAtCursor = (html: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("insertHTML", false, html);
    }
  };

  const handleSubmit = () => {
    const content = editorRef.current?.innerHTML;
    console.log("Editor Content:", content);
  };

  const handleList = (isOrdered: boolean) => {
    const listItemsInput = prompt("Enter the list items separated by commas");
    if (listItemsInput) {
      const listItems = listItemsInput.split(",").map((item) => item.trim());

      let listHTML = "";
      if (isOrdered) {
        listHTML = listItems
          .map((item, index) => `<div>${index + 1}. ${item}</div>`)
          .join("");
      } else {
        listHTML = listItems.map((item) => `<div>• ${item}</div>`).join("");
      }

      insertHTMLAtCursor(listHTML);
    }
  };

  // Handle Text Alignment (Left, Center, Right)
  const handleTextAlign = (alignment: "left" | "center" | "right") => {
    document.execCommand(
      "justify" + alignment.charAt(0).toUpperCase() + alignment.slice(1)
    );
  };
  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const fontSize = event.target.value;
    if (fontSize) {
      applyCommand("fontSize", fontSize);
    }
  };
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center space-x-2 mb-4 border-b pb-2">
        <select
          onChange={handleFontSizeChange}
          defaultValue=""
          className="border p-1 rounded"
        >
          <option value="" disabled>
            Select font size
          </option>
          <option value="1">Small</option>
          <option value="2">Large Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Extra Large</option>
        </select>

        {/* Bold, Italic, Underline */}
        <button
          onClick={() => applyCommand("bold")}
          className="p-1 border rounded font-bold"
        >
          B
        </button>
        <button
          onClick={() => applyCommand("italic")}
          className="p-1 border rounded italic"
        >
          I
        </button>
        <button
          onClick={() => applyCommand("underline")}
          className="p-1 border rounded underline"
        >
          U
        </button>

        {/* Custom Text Color */}
        <input
          type="color"
          onChange={(e) => handleColorChange(e.target.value)}
          className="border p-1 rounded"
        />

        {/* Link and Image */}
        <button onClick={handleLink} className="p-1 border rounded">
          Link
        </button>
        <button onClick={handleImage} className="p-1 border rounded">
          Image
        </button>

        {/* Lists */}
        <button
          onClick={() => handleList(false)} // Unordered list
          className="p-1 border rounded"
        >
          • List
        </button>
        <button
          onClick={() => handleList(true)} // Ordered list
          className="p-1 border rounded"
        >
          1.Number List
        </button>

        {/* Text Alignment */}
        <button
          onClick={() => handleTextAlign("left")}
          className="p-1 border rounded"
        >
          Left
        </button>
        <button
          onClick={() => handleTextAlign("center")}
          className="p-1 border rounded"
        >
          Center
        </button>
        <button
          onClick={() => handleTextAlign("right")}
          className="p-1 border rounded"
        >
          Right
        </button>

        {/* Table */}
        <button onClick={handleTableInsert} className="p-1 border rounded">
          Table
        </button>
      </div>

      {/* Editable Content */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="editor-container border border-gray-300 p-2 min-h-[200px] rounded-lg focus:outline-none"
      ></div>

      {/* Output for debugging */}
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Test;
