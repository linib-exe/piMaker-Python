// //Input Block
// Blockly.JavaScript['input_block'] = function(block) {
//     var prompt = block.getFieldValue('PROMPT'); // Retrieve the text prompt
//     var code = 'input("' + prompt + '")';
//     return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
// };

//Print Block
Blockly.JavaScript['print_block'] = function (block) {
    var value_to_print = Blockly.JavaScript.valueToCode(block, 'PRINT_VALUE', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = 'print(' + value_to_print + ')\n';
    return code;
};

// If...Then Block
Blockly.JavaScript['python_if_then'] = function (block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'False';
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return 'if ' + condition + ':\n' + statements;
};

// Elif...Then Block
Blockly.JavaScript['python_elif_then'] = function (block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'False';
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return 'elif ' + condition + ':\n' + statements;
};

// Else Block
Blockly.JavaScript['python_else'] = function (block) {
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    return 'else:\n' + statements;
};

// Python For Loop Generator
Blockly.JavaScript['repeat_times_block'] = function (block) {
    var times = block.getFieldValue('TIMES') || 10; // Default is 10
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = `for _ in range(${times}):\n` +
        Blockly.JavaScript.prefixLines(statements_do, Blockly.JavaScript.INDENT);
    return code;
};

//Python While Loop 
Blockly.JavaScript['while_loop_block'] = function (block) {
    var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'True';
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');

    var code = `while ${value_condition}:\n` +
        Blockly.JavaScript.prefixLines(statements_do, Blockly.JavaScript.INDENT);
    return code;
};

//Number Block
Blockly.JavaScript['number_block'] = function (block) {
    var number_value = block.getFieldValue('NUM'); // Get the numeric value from the block
    var code = `${number_value}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Text Block
Blockly.JavaScript['text_block'] = function (block) {
    var text_value = block.getFieldValue('TEXT'); // Retrieve text input
    var code = `"${text_value}"`; // Wrap text in double quotes
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Float Block 
Blockly.JavaScript['float_block'] = function (block) {
    var float_value = block.getFieldValue('FLOAT'); // Retrieve float value
    var code = `${float_value}`; // Directly use the float value
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Variable Block
Blockly.JavaScript['variable_block'] = function (block) {
    var variable_name = block.getFieldValue('VAR'); // Retrieve the variable name
    var code = `${variable_name}`; // Output the variable name as is
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// //Variable Assignment Block 
// Blockly.JavaScript['variable_assignment_block'] = function(block) {
//     var variable_name = block.getFieldValue('VAR'); // Get the variable name
//     var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0'; // Get the value to assign
//     var code = `${variable_name} = ${value}\n`; // Generate Python code
//     return code;
// };

//Int typecase block
Blockly.JavaScript['typecast_int_block'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
    var code = `int(${value})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Str typecase block
Blockly.JavaScript['typecast_str_block'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '""';
    var code = `str(${value})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Float typecase block
Blockly.JavaScript['typecast_float_block'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0.0';
    var code = `float(${value})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//Type Block 
Blockly.JavaScript['type_block'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || 'None';
    var code = `type(${value})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//For loop for iterable
Blockly.JavaScript['for_iterable_block'] = function (block) {
    var variable = block.getFieldValue('VAR');  // Get the loop variable name
    var iterable = Blockly.JavaScript.valueToCode(block, 'ITERABLE', Blockly.JavaScript.ORDER_COMMA) || 'None';  // Get the iterable object (list, range, etc.)
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');  // Get the loop body

    var code = `for ${variable} in ${iterable}:\n${statements}`;
    return code;
};

// Blockly.JavaScript['operator_block'] = function(block) {
//     var operator = block.getFieldValue('OPERATOR');
//     return [operator, Blockly.JavaScript.ORDER_ATOMIC];
// };

Blockly.JavaScript['expression_block'] = function (block) {
    var operand1 = Blockly.JavaScript.valueToCode(block, 'OPERAND1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var operator = Blockly.JavaScript.valueToCode(block, 'OPERATOR', Blockly.JavaScript.ORDER_ATOMIC) || '+';
    var operand2 = Blockly.JavaScript.valueToCode(block, 'OPERAND2', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    var code = `${operand1} ${operator} ${operand2}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['expression_block1'] = function (block) {
    var operand1 = Blockly.JavaScript.valueToCode(block, 'OPERAND1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var operator = block.getFieldValue('OPERATOR'); // Get operator from dropdown
    var operand2 = Blockly.JavaScript.valueToCode(block, 'OPERAND2', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    var code = `${operand1} ${operator} ${operand2}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['break_block'] = function (block) {
    return 'break\n';
};

Blockly.JavaScript['continue_block'] = function (block) {
    return 'continue\n';
};

Blockly.JavaScript['for'] = function (block) {
    var variable = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC) || 'i';
    var range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY') || 'pass';

    // Construct Python code for the for loop
    var code = `for ${variable} in ${range}:\n` + Blockly.JavaScript.prefixLines(statements_body, '    ');
    return code;
};

Blockly.JavaScript['range_triple_block'] = function (block) {
    var lower = Blockly.JavaScript.valueToCode(block, 'LOWER', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var upper = Blockly.JavaScript.valueToCode(block, 'UPPER', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    var code = `range(${lower}, ${upper}, ${step})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['range_double_block'] = function (block) {
    var lower = Blockly.JavaScript.valueToCode(block, 'LOWER', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var upper = Blockly.JavaScript.valueToCode(block, 'UPPER', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `range(${lower}, ${upper})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['range_single_block'] = function (block) {
    var upper = Blockly.JavaScript.valueToCode(block, 'UPPER', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `range(${upper})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['arithmetic_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['assignment_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['comparison_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logical_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['identity_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['membership_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bitwise_operator_block'] = function (block) {
    var operator = block.getFieldValue('OPERATOR');
    return [operator, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['function_block'] = function (block) {
    var functionName = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || 'function_name';  // Get function name
    var param = Blockly.JavaScript.valueToCode(block, 'PARAMS', Blockly.JavaScript.ORDER_COMMA) || 'parameters';  // Get parameters from PARAMS
    var statementsBody = Blockly.JavaScript.statementToCode(block, 'BODY');  // Get the body of the function

    // If there are no statements, use Python 'pass' as default
    if (!statementsBody) {
        statementsBody = 'pass';
    }

    // Generate Python code for function definition
    var code = 'def ' + functionName + '(' + param + '):\n' + Blockly.JavaScript.prefixLines(statementsBody, Blockly.JavaScript.INDENT);
    return code;  // Return the generated Python code
};

Blockly.JavaScript['return_block'] = function (block) {
    var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN_VALUE', Blockly.JavaScript.ORDER_NONE) || '';  // Get the value to return

    // Generate Python code for the return statement
    var code = 'return ' + returnValue;
    return code + '\n';  // Return the generated Python code with a newline
};

Blockly.JavaScript['function_call_block'] = function (block) {
    var functionName = block.getFieldValue('FUNCTION_NAME');  // Get the function name
    var params = Blockly.JavaScript.valueToCode(block, 'PARAMS', Blockly.JavaScript.ORDER_COMMA) || '';  // Get the parameters

    // If there are parameters, join them with commas
    if (params) {
        params = params.split('\n').join(', ');  // Ensure multiple parameters are separated by commas
    }

    // Generate Python code for the function call
    var code = functionName + '(' + params + ')';
    return code + '\n';  // Return the generated Python code with a newline
};

Blockly.JavaScript['function_call_block1'] = function (block) {
    var functionName = block.getFieldValue('FUNCTION_NAME');  // Get the function name
    var params = Blockly.JavaScript.valueToCode(block, 'PARAMS', Blockly.JavaScript.ORDER_COMMA) || '';  // Get the parameters

    // If there are parameters, join them with commas
    if (params) {
        params = params.split('\n').join(', ');  // Ensure multiple parameters are separated by commas
    }

    // Generate Python code for the function call
    var code = functionName + '(' + params + ')';
    return code + '\n';  // Return the generated Python code with a newline
};


Blockly.JavaScript['input_block'] = function (block) {
    var prompt = block.getFieldValue('PROMPT');
    var code = `input("${prompt}")`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['variable_assignment_block'] = function (block) {
    var variable_name = block.getFieldValue('VAR');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'None';
    var code = `${variable_name} = ${value}\n`;
    return code;
};



Blockly.JavaScript['list_remove_block'] = function (block) {
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    var code = list + '.pop(' + index + ')\n';
    return code;
};

Blockly.JavaScript['list_append_block'] = function (block) {
    var element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    var code = list + '.append(' + element + ')\n';
    return code;
};

Blockly.JavaScript['list_index_access_block'] = function (block) {
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
    var code = list + '[' + index + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['list_create_block'] = function (block) {
    var items = Blockly.JavaScript.valueToCode(block, 'ITEMS', Blockly.JavaScript.ORDER_ATOMIC) || "";
    var code = `[${items}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['list_empty_block'] = function (block) {
    return ['[]', Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['data_block'] = function (block) {
    var variable_name = block.getFieldValue('VAR'); // Retrieve the variable name
    var code = `${variable_name}`; // Output the variable name as is
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tuple_access_block'] = function(block) {
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var tuple = Blockly.JavaScript.valueToCode(block, 'TUPLE', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var code = `${tuple}[${index}]`;  // Accessing the item at the given index
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tuple_create_block'] = function (block) {
    var items = Blockly.JavaScript.valueToCode(block, 'ITEMS', Blockly.JavaScript.ORDER_ATOMIC) || "";
    var code = `(${items})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};











