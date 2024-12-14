// Initialize Blockly workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
<xml xmlns="https://developers.google.com/blockly/xml">

    <!-- 1. Basic Input/Output -->
    <category name="Input/Output" colour="230">
        <block type="input_block"></block>
        <block type="print_block"></block>
    </category>

    <!-- 2. Control Flow -->
    <category name="Control Flow" colour="120">
    <category name="Conditionals" colour="120">
        <block type="python_if_then"></block>
        <block type="python_elif_then"></block>
        <block type="python_else"></block>
    </category>

    <category name="Loops" colour="120">
        <block type="repeat_times_block"></block>
        <block type="while_loop_block"></block>
        <block type="for"></block>
        <block type="for_iterable_block"></block>
        <block type="break_block"></block>
        <block type="continue_block"></block>
    </category>
    </category>

    <!-- 3. Data Types and Variables -->
    <category name="Data Types and Variables" colour="210">
        <block type="number_block"></block>
        <block type="float_block"></block>
        <block type="text_block"></block>
        <block type="variable_block"></block>
        <block type="data_block"></block>
        <block type="variable_assignment_block"></block>
        <block type="type_block"></block>
    </category>

    <!-- 4. Typecasting -->
    <category name="Typecasting" colour="170">
        <block type="typecast_int_block"></block>
        <block type="typecast_str_block"></block>
        <block type="typecast_float_block"></block>
    </category>

    <!-- 5. Operators and Expressions -->
    <category name="Operators and Expressions" colour="160">
        <category name="Expressions" colour="160">
            <block type="expression_block"></block>
            <block type="expression_block1"></block>
        </category>
        <category name="Operators" colour="160">
            <block type="arithmetic_operator_block"></block>
            <block type="assignment_operator_block"></block>
            <block type="comparison_operator_block"></block>
            <block type="logical_operator_block"></block>
            <block type="identity_operator_block"></block>
            <block type="membership_operator_block"></block>
            <block type="bitwise_operator_block"></block>
        </category>
    </category>

    <!-- 6. Range Blocks -->
    <category name="Range" colour="180">
        <block type="range_single_block"></block>
        <block type="range_double_block"></block>
        <block type="range_triple_block"></block>
        <block type="function_block"></block>
        <block type="return_block"></block>
    </category>

    <category name="Functions" colour="180">
        <block type="function_block"></block>
        <block type="return_block"></block>
        <block type="function_call_block"></block>
        <block type="function_call_block1"></block>
    </category>

    <category name="List" colour="180">
        <block type="list_empty_block"></block>
        <block type="list_create_block"></block>
        <block type="list_index_access_block"></block>
        <block type="list_append_block"></block>
        <block type="list_remove_block"></block>
    </category>

    <category name="Tuple" colour="180">
        <block type="tuple_access_block"></block>
        <block type="tuple_create_block"></block>
    </category>

    <category name="Dictionary" colour="180">
        <block type="dictionary_create_block"></block>
    </category>

</xml>
    `
});

// Function to generate and display code
const generateCode = () => {
    try {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        const outputElement = document.getElementById('outputCode');
        outputElement.textContent = code || 'No blocks in workspace!';
    } catch (error) {
        document.getElementById('outputCode').textContent = `Error generating code: ${error.message}`;
    }
};


// Add a change listener to the workspace to auto-generate code
workspace.addChangeListener(generateCode);

// Initial code generation to show default state
generateCode();

document.getElementById('copyCode').addEventListener('click', () => {
    const code = document.getElementById('outputCode').textContent;
    if (code.trim()) {
        navigator.clipboard.writeText(code)
            .then(() => alert('Code copied to clipboard!'))
            .catch(err => alert('Failed to copy code: ' + err));
    } else {
        alert('No code to copy!');
    }
});


// Download code as .ino file
document.getElementById('downloadCode').addEventListener('click', () => {
    const code = document.getElementById('outputCode').textContent;
    if (code.trim()) {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'arduino_program.ino'; // File name for download
        a.click();
        URL.revokeObjectURL(url);
    } else {
        alert('No code to download!');
    }
});

// Function to save the entire workspace as a .pimaker file
function saveWorkspace() {
    const xml = Blockly.Xml.workspaceToDom(workspace);  // Convert the workspace to XML
    const xmlText = Blockly.Xml.domToText(xml);  // Convert the XML DOM to a text string

    // Ask the user for the filename (without extension)
    const filename = prompt("Enter a filename for your workspace:", "workspace");

    // If the user enters a filename, proceed with saving
    if (filename) {
        // Ensure the filename has the correct extension (.pimaker)
        const fullFilename = filename.endsWith('.pimaker') ? filename : filename + '.pimaker';

        // Create a Blob with the XML data and make it downloadable
        const blob = new Blob([xmlText], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fullFilename;  // Use the provided filename with the .pimaker extension
        link.click();  // Trigger the download

        alert(`Workspace saved as ${fullFilename}`);
    } else {
        alert('Please provide a filename.');
    }
}

function loadWorkspace() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pimaker';

    // Listen for the file being selected
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const xmlText = event.target.result;
            const xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);  // Load the XML into the workspace

            alert("Workspace loaded!");
        };

        reader.readAsText(file);
    });

    fileInput.click();  // Trigger the file input dialog
}


// Event listener for the "Save Workspace" button
document.getElementById('saveWorkspaceButton').addEventListener('click', saveWorkspace);

// Event listener for the "Load Workspace" button
document.getElementById('loadWorkspaceButton').addEventListener('click', loadWorkspace);

document.getElementById('toggleOutput').addEventListener('click', function () {
    const outputSection = document.getElementById('outputSection');

    // Toggle the visibility of the output section
    if (outputSection.style.display === 'none' || outputSection.style.display === '') {
        outputSection.style.display = 'block';  // Show the section
    } else {
        outputSection.style.display = 'none';  // Hide the section
    }
});