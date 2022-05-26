export const PowerBtn = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="power-off"
        className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
        />
      </svg>
    )
  }
  
  export const BackBtn = (props) => {
      return(
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 219.151 219.151"
      style={{
        enableBackground: "new 0 0 219.151 219.151",
        width: "40",
        hegith: "40",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill={props.fill} 
      d="M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576C219.149 49.156 169.995 0 109.576 0S.002 49.156.002 109.575c0 60.42 49.155 109.576 109.574 109.576zm0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15z" />
      <path d="M94.861 156.507a7.502 7.502 0 0 0 10.606 0 7.499 7.499 0 0 0-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 0 0-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 0 0-10.607-10.608l-41.629 41.628a7.495 7.495 0 0 0-2.197 5.303 7.51 7.51 0 0 0 2.198 5.305l41.627 41.624z" />
    </svg>
      )
  }
  
  export const Github = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        )
  }
  
  export const Twitter = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="twitter"
            className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        )
  }
  
  export const Facebook = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook"
            className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        )
  }
  
  export const Linkedin = (props) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M32 6C17.641 6 6 17.641 6 32s11.641 26 26 26 26-11.641 26-26S46.359 6 32 6zm-7 38h-5V26h5v18zm-2.515-20h-.028C20.965 24 20 22.888 20 21.499 20 20.08 20.995 19 22.514 19c1.521 0 2.458 1.08 2.486 2.499C25 22.887 24.035 24 22.485 24zM44 44h-5v-9c0-3-1.446-4-3-4-1.445 0-3 1-3 4v9h-5V26h5v3c.343-.981 1.984-3 5-3 4 0 6 3 6 8v10z" />
    </svg>
      )
  }
  
  
  
  export const YouTube = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="youtube"
            className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        )
  }
  
  export const YinYang = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="yin-yang"
            className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
            />
          </svg>
        )
  }
  
  export const Anchor = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="anchor"
        className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
        />
      </svg>
    )
  }
  
  
  
  export const Link = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="link"
        className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
        
      >
        <path
          fill={props.fill}
          
          d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
        />
      </svg>
    )
  }
  
  
  
  export const Design = (props) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="palette"
        className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        />
      </svg>
    )
  
  }
  
  export const Develope = (props) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="laptop-code"
        className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        {...props}
      >
        <path
           fill={props.fill}
          d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
        />
      </svg>
    )
  
  }
  
  export const Database = (props) => { 
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 58.201 58.201"
      style={{
        enableBackground: "new 0 0 58.201 58.201",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path d="M52.524 45.537c-.429-4.107-3.852-7.332-7.953-7.332-2.564 0-4.984 1.286-6.48 3.402a5.11 5.11 0 0 0-.883-.076c-2.32 0-4.381 1.577-5.066 3.813-1.907 1.131-3.116 3.241-3.116 5.502 0 3.507 2.785 6.359 6.208 6.359h10.774c.06 0 .118-.004.171-.008.062.004.124.008.188.008h4.31c3.225 0 5.849-2.687 5.849-5.989-.001-2.6-1.642-4.874-4.002-5.679zm-1.847 9.668-4.352-.003-.17-.006-10.922.009c-2.32 0-4.208-1.956-4.208-4.359 0-1.665.949-3.21 2.417-3.935l.435-.214.102-.475c.331-1.56 1.689-2.691 3.229-2.691.345 0 .688.057 1.02.168l.777.261.408-.711c1.096-1.906 3.024-3.044 5.158-3.044 3.265 0 5.955 2.747 5.998 6.123l.011.813.799.155c1.823.354 3.146 2.002 3.146 3.919 0 2.2-1.726 3.99-3.848 3.99z" />
      <path d="M29.875 43.044c1.363-2.618 3.96-4.337 6.872-4.5 2.066-2.127 4.894-3.339 7.824-3.339 2.531 0 4.916.916 6.818 2.455.095-.087.203-.173.287-.26V28c-1.318.905-3.028 1.697-5.025 2.367-4.21 1.472-10.048 2.502-17.369 2.703a84.074 84.074 0 0 1-5.22-.001c-7.341-.201-13.191-1.238-17.403-2.717C4.68 29.685 2.984 28.899 1.676 28v9.4c2.846 2.971 12.394 5.711 25 5.711 1.093 0 2.154-.028 3.199-.067z" />
      <path d="M24.311 29.965c.326.009.651.018.982.023a78.848 78.848 0 0 0 2.766.001c.33-.005.656-.015.982-.023l.349-.008c11.253-.359 19.648-2.915 22.286-5.668v-9.401C46.808 18.232 36.52 20 26.676 20s-20.133-1.768-25-5.111v9.4c2.638 2.754 11.033 5.31 22.286 5.668l.349.008z" />
      <path d="M51.676 11.306V9a.92.92 0 0 0-.135-.458C50.418 4.241 41.791 0 26.676 0 11.598 0 2.979 4.22 1.822 8.51a.97.97 0 0 0-.146.49v2.306C4.512 14.267 13.992 17 26.676 17s22.163-2.733 25-5.694zM26.025 50.845c0-1.652.451-3.249 1.249-4.651-.201.001-.395.007-.599.007-12.346 0-20.866-2.29-25-5.201v8.201a.94.94 0 0 0 .117.451c1.181 4.895 11.747 8.549 24.883 8.549.95 0 1.881-.024 2.801-.062a9.404 9.404 0 0 1-3.451-7.294z" />
    </svg>
    )
  
  }
  export const Carwheel = (props) => { 
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <linearGradient
          id="i"
          y2={814.67}
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          x2={593.26}
          y1={814.67}
          x1={492.68}
        />
        <linearGradient id="a">
          <stop stopColor="#e4e4cd" offset={0} />
          <stop stopColor="#858585" offset={1} />
        </linearGradient>
        <linearGradient
          id="g"
          y2={814.71}
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          x2={543.91}
          y1={814.71}
          x1={525.71}
        />
        <linearGradient
          id="h"
          y2={814.01}
          xlinkHref="#b"
          gradientUnits="userSpaceOnUse"
          x2={539.37}
          y1={814.01}
          x1={529.99}
        />
        <linearGradient id="b">
          <stop offset={0} />
          <stop stopOpacity={0} offset={1} />
        </linearGradient>
        <linearGradient
          id="e"
          y2={956}
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          x2={792.08}
          gradientTransform="scale(2.33555) rotate(9 4003.484 -2023.587)"
          y1={956}
          x1={695.92}
        />
        <linearGradient
          id="f"
          y2={956}
          xlinkHref="#c"
          gradientUnits="userSpaceOnUse"
          x2={792.08}
          gradientTransform="scale(2.33555) rotate(9 4003.484 -2023.587)"
          y1={956}
          x1={695.92}
        />
        <linearGradient id="c">
          <stop stopColor="#252525" offset={0} />
          <stop stopColor="#232323" offset={1} />
        </linearGradient>
        <radialGradient
          id="d"
          xlinkHref="#c"
          gradientUnits="userSpaceOnUse"
          cy={536}
          cx={328}
          r={80}
        />
      </defs>
      <path
        d="M128.01 64.016c0 35.346-28.654 64-64.001 64-35.346 0-64.001-28.654-64.001-64S28.66.015 64.008.015s64.002 28.654 64.002 64z"
        fill="#1a1a1a"
      />
      <path
        d="M408 536c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z"
        transform="translate(-191.54 -353.59) scale(.77907)"
        fill="url(#d)"
      />
      <path
        opacity={0.08}
        d="M591.41 814.67c0 26.859-21.686 48.633-48.438 48.633-26.751 0-48.438-21.774-48.438-48.633s21.686-48.633 48.438-48.633c26.751 0 48.438 21.774 48.438 48.633z"
        transform="matrix(1.2595 0 0 1.2822 -619.54 -981.49)"
        fill="url(#sand_bitmap)"
      />
      <path
        d="M114.304 63.403c0 27.381-22.382 49.578-49.993 49.578-27.61 0-49.992-22.197-49.992-49.578S36.7 13.825 64.31 13.825c27.61 0 49.993 22.197 49.993 49.578z"
        fill="#333"
      />
      <path
        d="M719.38 912.53a50.193 50.193 0 0 0-11.062 7.875c8.112 9.958 13.65 19.744 10.906 28.188-2.762 8.501-13.125 13.208-25.656 16.5.818 4.559 2.236 8.901 4.219 12.938 12.073-4.703 23.206-7.004 30.438-1.75 7.18 5.217 8.458 16.367 7.75 29.188 2.214.297 4.484.469 6.781.469s4.567-.172 6.781-.469c-.708-12.82.6-23.97 7.781-29.188 7.232-5.254 18.333-2.953 30.406 1.75 1.983-4.036 3.401-8.379 4.22-12.938-12.532-3.292-22.895-7.999-25.657-16.5-2.743-8.444 2.794-18.229 10.906-28.188a50.067 50.067 0 0 0-11.03-7.875c-6.95 10.75-14.56 18.97-23.41 18.97-8.854 0-16.428-8.221-23.376-18.969z"
        transform="translate(-678.451 -892.982)"
        fill="url(#e)"
      />
      <path
        d="M715.97 914.5a50.486 50.486 0 0 0-4.688 3.344c12.975 16.465 24.263 31.448 22.906 35.625-1.364 4.2-19.496 9.708-39.812 15.438a48.807 48.807 0 0 0 1.813 5.531c19.796-7.304 37.709-13.502 41.281-10.906 3.555 2.583 3.226 21.353 2.406 42.313.955.054 1.907.094 2.875.094s1.92-.04 2.875-.094c-.82-20.96-1.148-39.73 2.406-42.313 3.572-2.595 21.485 3.603 41.281 10.906a48.82 48.82 0 0 0 1.813-5.531c-20.317-5.73-38.448-11.237-39.812-15.438-1.357-4.177 9.932-19.16 22.906-35.625a50.257 50.257 0 0 0-4.688-3.344c-11.64 17.412-22.393 32.75-26.78 32.75-4.39 0-15.14-15.334-26.782-32.75z"
        transform="translate(-678.451 -892.982)"
        fill="url(#f)"
      />
      <path
        d="M543.41 814.71c0 4.942-3.85 8.948-8.6 8.948s-8.6-4.006-8.6-8.948 3.85-8.948 8.6-8.948 8.6 4.006 8.6 8.948z"
        transform="matrix(2.099 0 0 2.1276 -1058.24 -1669.95)"
        fill="url(#g)"
      />
      <path
        d="M543.41 814.71c0 4.942-3.85 8.948-8.6 8.948s-8.6-4.006-8.6-8.948 3.85-8.948 8.6-8.948 8.6 4.006 8.6 8.948z"
        transform="matrix(1.2895 0 0 1.307 -625.32 -1001.45)"
        stroke="#000"
        fill="url(#g)"
      />
      <g transform="matrix(1.2895 0 0 1.307 -625.1 -1000.39)" fill="url(#h)">
        <path d="M532.782 809.505c0 .767-.633 1.389-1.415 1.389s-1.415-.622-1.415-1.389.633-1.389 1.415-1.389 1.415.622 1.415 1.389zM539.441 809.321c0 .767-.633 1.389-1.415 1.389s-1.415-.622-1.415-1.389.633-1.389 1.415-1.389 1.415.622 1.415 1.389zM541.24 815.83c0 .767-.634 1.389-1.416 1.389-.782 0-1.415-.622-1.415-1.389s.633-1.389 1.415-1.389 1.415.622 1.415 1.389zM530.935 816.165c0 .767-.633 1.389-1.415 1.389s-1.415-.622-1.415-1.389.633-1.389 1.415-1.389 1.415.622 1.415 1.389zM536.122 819.845c0 .767-.633 1.389-1.415 1.389s-1.415-.622-1.415-1.389.633-1.389 1.415-1.389 1.415.622 1.415 1.389z" />
      </g>
      <path
        d="M591.41 814.67c0 27.454-21.686 49.71-48.438 49.71-26.751 0-48.438-22.256-48.438-49.71s21.686-49.71 48.438-49.71c26.751 0 48.438 22.256 48.438 49.71z"
        transform="matrix(1.0321 0 0 .99734 -496.09 -749.1)"
        stroke="url(#i)"
        strokeWidth={3.711}
        fill="none"
      />
    </svg>
    )
  
  }