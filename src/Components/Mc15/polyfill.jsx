import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

function Polyfill() {
  useEffect(() => {
    //polyfill of call

    Function.prototype.myCall = function (context, ...args) {
      if (typeof this == "function" && !context) {
        this(...args);
      } else {
        context["fn"] = this;
        context.fn(...args);
        delete context.fn;
      }
    };

    function callShow() {
      console.log("Show.....");
    }

    const obj = {
      name: "Rahul",
      lastName(last) {
        console.log(`The Person is ${this.name} ${last} `);
      },
    };
    const person = {
      name: "Rahul",
      lastName(last) {
        console.log(`The Person is ${this.name} ${last} `);
      },
    };

    callShow.myCall();
    obj.lastName.myCall(person, "das");
  }, []);

  useEffect(() => {
    //bind polyfill

    Function.prototype.myBind = function (context, ...args) {
      if (typeof this == "function" && !context) {
        const fn = this;
        return function () {
          fn(...args);
        };
      } else {
        context["fn"] = this;
        return function () {
          context["fn"](...args);
        };
      }
    };

    function show() {
      console.log("bind....");
    }
    const obj = {
      type: "",
      desc() {
        console.log(`This is ${this.type}`);
      },
    };
    const pollyFillDesc = {
      type: "bind polyfill",
    };
    show.myBind()();
    obj.desc.myBind(pollyFillDesc)();
  }, []);

  return (
    <Box>
      <Typography>Polyfills</Typography>
    </Box>
  );
}

export default Polyfill;
