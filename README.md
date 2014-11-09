# Tessel-board API



 
## [Leds](https://tessel.io/docs/hardwareAPI#api-array-Pin-tessel-led)

An array of 4 LEDs available on the Tessel board. These are Pin objects. Their board order is different than their array index order; they're in rainbow order on the board.


 
### /api/led?led=:ledIndex

##### GET /api/led?led=0
```JSON
{
  "index":"0",
  "led":{
    "$value":0,
    "pin":0,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/led?led=1
```JSON
{
  "index":"1",
  "led":{
    "$value":0,
    "pin":1,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/led?led=2
```JSON
{
  "index":"2",
  "led":{
    "$value":0,
    "pin":9,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/led?led=3
```JSON
{
  "index":"3",
  "led":{
    "$value":1,
    "pin":8,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/led?led/toggle=:ledIndex

##### GET /api/led/toggle?led=0
```JSON
{
  "index":"0",
  "led":{
    "$value":1,
    "pin":0,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/led/toggle?led=0
```JSON
{
  "index":"0",
  "led":{
    "$value":0,
    "pin":0,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```



 
## [Pins and Ports](https://tessel.io/docs/hardwareAPI#pins)

General purpose input-output (GPIO) provides access for digital and analog signal lines. You may find it useful to cross-reference this section with the hardware documentation for [Pins and Ports](https://tessel.io/docs/hardware#pins-and-ports).

A list of ports available on Tessel. Keys for this are "A", "B", "C", "D", or "GPIO". [doc](https://tessel.io/docs/hardwareAPI#api-map-Port-tessel-port)


 
### /api/port?port=:portName

You can address each of the pins in the module ports. Ports A, B, C, and D each have 3 digital pins. For more details on addressing the other pins on the module ports, see the sections on [SPI](https://tessel.io/docs/hardwareAPI#spi), [I2C](https://tessel.io/docs/hardwareAPI#i2c), and [UART](https://tessel.io/docs/hardwareAPI#uart).

##### GET /api/port?port=A
```JSON
{
  "name":"A",
  "port":{
    "pin":{
      "G1":{
        "pin":16,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G3":{
        "pin":18,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G2":{
        "pin":17,
        "isPWM":false,
        "interrupts":{

        }
      }
    },
    "id":"A",
    "pwm":[

    ],
    "analog":[

    ],
    "digital":[
      {
        "pin":16,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":17,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":18,
        "isPWM":false,
        "interrupts":{

        }
      }
    ]
  }
}
```

##### GET /api/port?port=B
```JSON
{
  "name":"B",
  "port":{
    "pin":{
      "G1":{
        "pin":19,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G3":{
        "pin":21,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G2":{
        "pin":20,
        "isPWM":false,
        "interrupts":{

        }
      }
    },
    "id":"B",
    "pwm":[

    ],
    "analog":[

    ],
    "digital":[
      {
        "pin":19,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":20,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":21,
        "isPWM":false,
        "interrupts":{

        }
      }
    ]
  }
}
```

##### GET /api/port?port=C
```JSON
{
  "name":"C",
  "port":{
    "pin":{
      "G1":{
        "pin":22,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G3":{
        "pin":24,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G2":{
        "pin":23,
        "isPWM":false,
        "interrupts":{

        }
      }
    },
    "id":"C",
    "pwm":[

    ],
    "analog":[

    ],
    "digital":[
      {
        "pin":22,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":23,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":24,
        "isPWM":false,
        "interrupts":{

        }
      }
    ]
  }
}
```

##### GET /api/port?port=D
```JSON
{
  "name":"D",
  "port":{
    "pin":{
      "G1":{
        "pin":25,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G3":{
        "pin":27,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G2":{
        "pin":26,
        "isPWM":false,
        "interrupts":{

        }
      }
    },
    "id":"D",
    "pwm":[

    ],
    "analog":[

    ],
    "digital":[
      {
        "pin":25,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":26,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":27,
        "isPWM":false,
        "interrupts":{

        }
      }
    ]
  }
}
```

##### GET /api/port?port=GPIO
```JSON
{
  "name":"GPIO",
  "port":{
    "pin":{
      "G6":{
        "pin":39,
        "isPWM":true,
        "interrupts":{

        }
      },
      "G3":{
        "pin":36,
        "isPWM":false,
        "interrupts":{

        }
      },
      "G5":{
        "pin":38,
        "isPWM":true,
        "interrupts":{

        }
      },
      "G1":{
        "pin":34,
        "isPWM":false,
        "interrupts":{

        }
      },
      "A4":{
        "pin":31,
        "isPWM":false,
        "pinmode":"input"
      },
      "A5":{
        "pin":32,
        "isPWM":false,
        "pinmode":"input"
      },
      "A6":{
        "pin":33,
        "isPWM":false,
        "pinmode":"input"
      },
      "G4":{
        "pin":37,
        "isPWM":true,
        "interrupts":{

        }
      },
      "A3":{
        "pin":30,
        "isPWM":false,
        "pinmode":"input"
      },
      "A2":{
        "pin":29,
        "isPWM":false,
        "pinmode":"input"
      },
      "A1":{
        "pin":28,
        "isPWM":false,
        "pinmode":"input"
      },
      "G2":{
        "pin":35,
        "isPWM":false,
        "interrupts":{

        }
      }
    },
    "id":"GPIO",
    "pwm":[
      {
        "pin":37,
        "isPWM":true,
        "interrupts":{

        }
      },
      {
        "pin":38,
        "isPWM":true,
        "interrupts":{

        }
      },
      {
        "pin":39,
        "isPWM":true,
        "interrupts":{

        }
      }
    ],
    "analog":[
      {
        "pin":28,
        "isPWM":false,
        "pinmode":"input"
      },
      {
        "pin":29,
        "isPWM":false,
        "pinmode":"input"
      },
      {
        "pin":30,
        "isPWM":false,
        "pinmode":"input"
      },
      {
        "pin":31,
        "isPWM":false,
        "pinmode":"input"
      },
      {
        "pin":32,
        "isPWM":false,
        "pinmode":"input"
      },
      {
        "pin":33,
        "isPWM":false,
        "pinmode":"input"
      }
    ],
    "digital":[
      {
        "pin":34,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":35,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":36,
        "isPWM":false,
        "interrupts":{

        }
      },
      {
        "pin":37,
        "isPWM":true,
        "interrupts":{

        }
      },
      {
        "pin":38,
        "isPWM":true,
        "interrupts":{

        }
      },
      {
        "pin":39,
        "isPWM":true,
        "interrupts":{

        }
      }
    ]
  }
}
```


 
### /api/port/pin?port=:portName&pin=:pinName

##### GET /api/port/pin?port=A&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/port/pin?port=A&pin=G2
```JSON
{
  "name":"G2",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":17,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/port/pin?port=A&pin=G3
```JSON
{
  "name":"G3",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":18,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/port/pin?port=GPIO&pin=A1
```JSON
{
  "name":"A1",
  "pin":{
    "pin":28,
    "isPWM":false,
    "pinmode":"input"
  }
}
```

##### GET /api/port/pin?port=GPIO&pin=A6
```JSON
{
  "name":"A6",
  "pin":{
    "pin":33,
    "isPWM":false,
    "pinmode":"input"
  }
}
```

##### GET /api/port/pin?port=GPIO&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":34,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### GET /api/port/pin?port=GPIO&pin=G6
```JSON
{
  "name":"G6",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":39,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/port/pin/mode?port=:portName&pin=:pinName&mode=:pinMode

Sets the pin as a pullup, pulldown, or neutral pin. Mode is one of pullup, pulldown or none. Passing in no argument is equivalent to none. [doc](https://tessel.io/docs/hardwareAPI#api-pin-pull-mode)

##### POST /api/port/pin/mode?port=A&pin=G1&mode=pullup
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/mode?port=A&pin=G1&mode=pulldown
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pulldown",
    "$value": 0,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/mode?port=A&pin=G1&mode=none
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"none",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/mode?port=A&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"none",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/port/pin/input?port=:portName&pin=:pinName

Set pin to be an input. [doc](https://tessel.io/docs/hardwareAPI#api-pin-input)

##### POST /api/port/pin/input?port=A&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/port/pin/output?port=:portName&pin=:pinName&value=:pinValue

Set pin to be an output with value. Note that the Analog pins cannot be outputs. [doc](https://tessel.io/docs/hardwareAPI#api-pin-output-value)

##### POST /api/port/pin/output?port=A&pin=G1&value=0
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 0,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/output?port=A&pin=G1&value=1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/port/pin/read?port=:portName&pin=:pinName

Sets the pin as an input and reads a digital or analog value. For digital pins, 1 is returned if the value is HIGH, otherwise 0 if LOW. For analog pins the range is between [1-0] inclusive. [doc](https://tessel.io/docs/hardwareAPI#api-pin-read)

##### POST /api/port/pin/read?port=A&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/output?port=A&pin=G1&value=0
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 0,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/output?port=A&pin=G1&value=1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```


 
### /api/port/pin/write?port=:portName&pin=:pinName&value=:pinValue

Behaves the same as pin.output. Sets pin as an output with value. Digital pins: output is set HIGH if value is truthy, otherwise LOW. [doc](https://tessel.io/docs/hardwareAPI#api-pin-write-value)

##### POST /api/port/pin/write?port=A&pin=G1&value=1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 1,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/write?port=A&pin=G1&value=0
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 0,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```

##### POST /api/port/pin/write?port=A&pin=G1
```JSON
{
  "name":"G1",
  "pin":{
    "$mode":"pullup",
    "$value": 0,
    "pin":16,
    "isPWM":false,
    "interrupts":{

    }
  }
}
```
