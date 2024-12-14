Blockly.defineBlocksWithJsonArray([


    //Print Block
    {
        "type": "print_block",
        "message0": "Print %1",
        "args0": [
            {
                "type": "input_value",
                "name": "PRINT_VALUE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Prints a value to the console",
        "helpUrl": ""
    },

    //if_then block
    {
        "type": "python_if_then",
        "message0": "If %1 Then %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CONDITION"
            },
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "colour": 210,
        "tooltip": "If condition then do something",
        "helpUrl": "",
        "previousStatement": null,  // Allows the block to be used before other blocks
        "nextStatement": null,
    },

    // Elif...Then Block
    {
        "type": "python_elif_then",
        "message0": "Elif %1 Then %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CONDITION"
            },
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "colour": 210,
        "tooltip": "Elif condition then do something",
        "helpUrl": "",
        "previousStatement": null,  // Allows the block to be used before other blocks
        "nextStatement": null,
    },

    // Else Block
    {
        "type": "python_else",
        "message0": "Else %1",
        "args0": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "colour": 210,
        "tooltip": "Else block to catch the remaining case",
        "helpUrl": "",
        "previousStatement": null,  // Allows the block to be used before other blocks
        "nextStatement": null,
    },


    //repeat_N_times block 
    {
        "type": "repeat_times_block",
        "message0": "Repeat %1 times",
        "args0": [
            {
                "type": "field_number",
                "name": "TIMES",
                "value": 10,
                "min": 1
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Repeat the specified number of times",
        "helpUrl": ""
    },

    // while loop
    {
        "type": "while_loop_block",
        "message0": "While %1",
        "args0": [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            }
        ],
        "message1": "Do %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "A while loop that runs while the condition is true",
        "helpUrl": ""
    },


    //Number Block
    {
        "type": "number_block",
        "message0": "Number %1",
        "args0": [
            {
                "type": "field_number",
                "name": "NUM",
                "value": 0,
                "min": -1000000,
                "max": 1000000,
                "precision": 1
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "A block that represents a number",
        "helpUrl": ""
    },

    //Float Block 
    {
        "type": "float_block",
        "message0": "Float %1",
        "args0": [
            {
                "type": "field_number",
                "name": "FLOAT",
                "value": 0.5,
                "min": -1000000,
                "max": 1000000,
                "precision": 0.1
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "A block that represents a floating-point number",
        "helpUrl": ""
    },

    // Text Block 
    {
        "type": "text_block",
        "message0": "Text %1",
        "args0": [
            {
                "type": "field_input",
                "name": "TEXT",
                "text": "Hello, World!"
            }
        ],
        "output": "String",
        "colour": 160,
        "tooltip": "A block that represents a text string",
        "helpUrl": ""
    },

    // Variable Block 
    {
        "type": "variable_block",
        "message0": "Variable %1",
        "args0": [
            {
                "type": "field_input",
                "name": "VAR",
                "text": "x"
            }
        ],
        "output": "Variable",
        "colour": 270,
        "tooltip": "A block that represents a variable",
        "helpUrl": ""
    },

    //Typecase Float
    {
        "type": "typecast_float_block",
        "message0": "float(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "Convert value to float",
        "helpUrl": ""
    },

    //Typecase Str
    {
        "type": "typecast_str_block",
        "message0": "str(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "output": "String",
        "colour": 160,
        "tooltip": "Convert value to string",
        "helpUrl": ""
    },

    //Typecase Int
    {
        "type": "typecast_int_block",
        "message0": "int(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "Convert value to integer",
        "helpUrl": ""
    },

    //Type Block 
    {
        "type": "type_block",
        "message0": "type(%1)",
        "args0": [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "output": "String",
        "colour": 120,
        "tooltip": "Get the type of a value",
        "helpUrl": ""
    },

    //For loop for iterable
    {
        "type": "for_iterable_block",
        "message0": "for %1 in %2",
        "args0": [
            {
                "type": "field_input",
                "name": "VAR",
                "text": "item"
            },
            {
                "type": "input_value",
                "name": "ITERABLE"
            }
        ],
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "For loop that iterates over an iterable",
        "helpUrl": ""
    },

    {
        "type": "expression_block",
        "message0": "%1 %2 %3",
        "args0": [
            {
                "type": "input_value",
                "name": "OPERAND1",
                "check": null
            },
            {
                "type": "input_value",
                "name": "OPERATOR",

            },
            {
                "type": "input_value",
                "name": "OPERAND2",
                "check": null
            }
        ],
        "output": null,
        "colour": 290,
        "tooltip": "Combine two operands with an operator",
        "helpUrl": "",
        "inputsInline": true
    },

    {
        "type": "expression_block1",
        "message0": "%1 %2 %3",
        "args0": [
            {
                "type": "input_value",
                "name": "OPERAND1",
                "check": null
            },
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["+", "+"],
                    ["-", "-"],
                    ["*", "*"],
                    ["/", "/"],
                    ["==", "=="],
                    ["!=", "!="],
                    ["<", "<"],
                    [">", ">"],
                    ["and", "and"],
                    ["or", "or"]
                ]
            },
            {
                "type": "input_value",
                "name": "OPERAND2",
                "check": null
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 290,
        "tooltip": "Combine two operands with a selected operator",
        "helpUrl": ""
    },

    {
        "type": "break_block",
        "message0": "break",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Exit the current loop immediately",
        "helpUrl": ""
    },

    {
        "type": "continue_block",
        "message0": "continue",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Skip the rest of the loop body and continue to the next iteration",
        "helpUrl": ""
    },

    {
        "type": "for",
        "message0": "for %1 in %2 %3",
        "args0": [
            {
                "type": "input_value",
                "name": "VAR",
                "check": null
            },
            {
                "type": "input_value",
                "name": "RANGE",
                "check": null
            },
            {
                "type": "input_statement",
                "name": "BODY"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 290,
        "tooltip": "For loop with a range and body statements",
        "helpUrl": "",
        "inputsInline": true
    },

    {
        "type": "range_triple_block",
        "message0": "range ( %1 , %2 , %3 )",
        "args0": [
            {
                "type": "input_value",
                "name": "LOWER",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "UPPER",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "STEP",
                "check": "Number"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Range from lower to upper-1 with step",
        "helpUrl": ""
    },

    {
        "type": "range_double_block",
        "message0": "range ( %1 , %2 )",
        "args0": [
            {
                "type": "input_value",
                "name": "LOWER",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "UPPER",
                "check": "Number"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Range from lower to upper-1",
        "helpUrl": ""
    },

    {
        "type": "range_single_block",
        "message0": "range ( %1 )",
        "args0": [
            {
                "type": "input_value",
                "name": "UPPER",
                "check": "Number"
            }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Range from 0 to upper-1",
        "helpUrl": ""
    },

    {
        "type": "arithmetic_operator_block",
        "message0": "Arithmetic: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["+", "+"],
                    ["-", "-"],
                    ["*", "*"],
                    ["/", "/"],
                    ["%", "%"],
                    ["**", "**"]
                ]
            }
        ],
        "output": "Number",
        "colour": 230,
        "tooltip": "Select an arithmetic operator",
        "helpUrl": ""
    },

    {
        "type": "assignment_operator_block",
        "message0": "Assignment: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["=", "="],
                    ["+=", "+="],
                    ["-=", "-="],
                    ["*=", "*="],
                    ["/=", "/="]
                ]
            }
        ],
        "output": "Variable",
        "colour": 210,
        "tooltip": "Select an assignment operator",
        "helpUrl": ""
    },

    {
        "type": "comparison_operator_block",
        "message0": "Comparison: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["==", "=="],
                    ["!=", "!="],
                    [">", ">"],
                    ["<", "<"],
                    [">=", ">="],
                    ["<=", "<="]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 120,
        "tooltip": "Select a comparison operator",
        "helpUrl": ""
    },

    {
        "type": "logical_operator_block",
        "message0": "Logical: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["AND", "and"],
                    ["OR", "or"],
                    ["NOT", "not"]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 180,
        "tooltip": "Select a logical operator",
        "helpUrl": ""
    },


    {
        "type": "identity_operator_block",
        "message0": "Identity: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["is", "is"],
                    ["is not", "is not"]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Select an identity operator",
        "helpUrl": ""
    },

    {
        "type": "membership_operator_block",
        "message0": "Membership: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["in", "in"],
                    ["not in", "not in"]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 140,
        "tooltip": "Select a membership operator",
        "helpUrl": ""
    },

    {
        "type": "bitwise_operator_block",
        "message0": "Bitwise: %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "OPERATOR",
                "options": [
                    ["&", "&"],
                    ["|", "|"],
                    ["^", "^"],
                    ["~", "~"],
                    ["<<", "<<"],
                    [">>", ">>"]
                ]
            }
        ],
        "output": "Number",
        "colour": 250,
        "tooltip": "Select a bitwise operator",
        "helpUrl": ""
    },

    {
        "type": "function_block",
        "message0": "def %1(%2):",
        "args0": [
            {
                "type": "input_value",
                "name": "NAME",
                "text": "my_function"
            },
            {
                "type": "input_value",
                "name": "PARAMS"
            }
        ],
        "message1": "body %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "BODY"
            }
        ],
        "colour": 290,
        "tooltip": "Create a Python function",
        "helpUrl": ""
    },
    {
        "type": "return_block",
        "message0": "return %1",
        "args0": [
            {
                "type": "input_value",
                "name": "RETURN_VALUE",

            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Return a value from a function",
        "helpUrl": ""
    },

    {
        "type": "function_call_block",
        "message0": "%1(%2)",
        "args0": [
            {
                "type": "field_input",
                "name": "FUNCTION_NAME",
                "text": "my_function"
            },
            {
                "type": "input_value",
                "name": "PARAMS",

            }
        ],
        "colour": 230,
        "tooltip": "Call a function with parameters",
        "helpUrl": "",
        "previousStatement": null,
        "nextStatement": null,
    },

    {
        "type": "function_call_block1",
        "message0": "%1(%2)",
        "args0": [
            {
                "type": "field_input",
                "name": "FUNCTION_NAME",
                "text": "my_function"
            },
            {
                "type": "input_value",
                "name": "PARAMS",

            }
        ],
        "colour": 230,
        "tooltip": "Call a function with parameters",
        "helpUrl": "",
        "output": null
    },

    {
        "type": "input_block",
        "message0": "Input prompt %1",
        "args0": [
            {
                "type": "field_input",
                "name": "PROMPT",
                "text": "Enter text"
            }
        ],
        "output": "String",  // Outputs a string
        "colour": 270,
        "tooltip": "Takes user input with an optional prompt",
        "helpUrl": ""
    },
    {
        "type": "variable_assignment_block",
        "message0": "%1 = %2",
        "args0": [
            {
                "type": "field_input",
                "name": "VAR",
                "text": "x"
            },
            {
                "type": "input_value", // Accepts input
                "name": "VALUE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Assign a value to a variables",
        "helpUrl": ""
    },



    {
        "type": "list_empty_block",
        "message0": "create empty list",
        "output": "Array",
        "colour": 230,
        "tooltip": "Create an empty list",
        "helpUrl": ""
    },

    {
        "type": "list_create_block",
        "message0": "create list with %1",
        "args0": [
            {
                "type": "input_value",
                "name": "ITEMS",
                "check": ["String", "Variable"]
            }
        ],
        "output": "Array",
        "colour": 230,
        "tooltip": "Create a list with initial string items",
        "helpUrl": ""
    },

    {
        "type": "list_index_access_block",
        "message0": "get item at index %1 from list %2",
        "args0": [
            {
                "type": "input_value",
                "name": "INDEX",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "LIST"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "Access an element of the list",
        "helpUrl": ""
    },


    {
        "type": "list_append_block",
        "message0": "append %1 to list %2",
        "args0": [
            {
                "type": "input_value",
                "name": "ELEMENT"
            },
            {
                "type": "input_value",
                "name": "LIST"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Add an element to the list",
        "helpUrl": ""
    },


    {
        "type": "list_remove_block",
        "message0": "remove item at index %1 from list %2",
        "args0": [
            {
                "type": "input_value",
                "name": "INDEX"
            },
            {
                "type": "input_value",
                "name": "LIST"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Remove an element from the list",
        "helpUrl": ""
    },

    {
        "type": "data_block",
        "message0": "Data %1",
        "args0": [
            {
                "type": "field_input",
                "name": "VAR",
                "text": "x"
            }
        ],
        "output": "Variable",
        "colour": 270,
        "tooltip": "A block that represents a data",
        "helpUrl": ""
    },

    {
        "type": "tuple_create_block",
        "message0": "create tuple with %1",
        "args0": [
            {
                "type": "input_value",
                "name": "ITEMS",
                "check": ["String", "Variable"]
            }
        ],
        "output": "Array",
        "colour": 230,
        "tooltip": "Create a list with initial string items",
        "helpUrl": ""
    },

    {
        "type": "tuple_access_block",
        "message0": "get item at index %1 from tuple %2",
        "args0": [
            {
                "type": "input_value",
                "name": "INDEX"
            },
            {
                "type": "input_value",
                "name": "TUPLE"
            }
        ],
        "output": null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "Access an element from the tuple at a given index",
        "helpUrl": ""
    }
    
    

]);