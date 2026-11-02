window.onload = function() {
  const CustomLogoPlugin = function(system) {
    return {
      components: {
        Logo: function() {
          return system.React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }
            },
            
            system.React.createElement("img", {
              src: "./pu.jpg",
              alt: "Logo PU",
              style: {
                height: "38px",
                width: "auto",
                borderRadius: "4px",
                objectFit: "contain"
              }
            }),
            
            system.React.createElement(
              "span",
              {
                style: {
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap"
                }
              },
              "API Testing by PU" 
            )
          );
        }
      }
    };
  };


  window.ui = SwaggerUIBundle({
    url: "./testing.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      CustomLogoPlugin
    ],
    layout: "StandaloneLayout"
  });
};
