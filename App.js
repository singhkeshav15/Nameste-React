const parent = React.createElement("div", { id: "title" }, [React.createElement("p",{ id: "para1" }, "lorem fvbaijfvaijvaofvjaov")
    ,React.createElement("p", { id :"para2"}, "lorem fvbaijfvaijvaofvjaov")
    ,React.createElement("p", { id: "para3" }, "lorem fvbaijfvaijvaofvjaov")
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);