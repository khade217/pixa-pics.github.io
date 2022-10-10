import * as React from "react";

function SvgPy(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={600} height={330} {...props}>
      <path d="M0 0h600v330H0z" fill="#0038a8" />
      <path d="M0 0h600v220H0z" fill="#fff" />
      <path d="M0 0h600v110H0z" fill="#d52b1e" />
      <path
        d="M341.817 164.99c0 23.101-18.716 41.826-41.818 41.826-23.09 0-41.816-18.725-41.816-41.827 0-23.093 18.726-41.806 41.816-41.806 23.102 0 41.818 18.713 41.818 41.806z"
        fill="#fff"
        stroke="#000"
        strokeWidth={1.843}
        strokeMiterlimit={10}
      />
      <path
        d="M320.236 158.499c-1.015-.042-1.022 1.078-1.022 1.078s.035-.33.007.044c-.02.373.166 1.28.916 1.352.792.07 1.054-.855 1.06-1.304 0-.178-.057-1.148-.96-1.17"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.493}
      />
      <path d="M273.768 181.722l-.357-.593a2.4 2.42 0 00-.28-.339.41.413 0 00-.276-.136.5.504 0 00-.326.066c-.14.085-.23.2-.245.339-.027.14.04.334.196.598l.362.617.926-.552zm3.54-.205l-4.549 2.707-1.39-2.334c-.256-.438-.413-.786-.474-1.06a1.174 1.184 0 01.078-.803c.115-.262.324-.481.615-.656.243-.146.495-.217.74-.229.255 0 .487.063.713.182.14.08.301.205.478.384a1.704 1.719 0 01-.057-.467c.015-.07.047-.186.11-.364.062-.171.12-.29.157-.365l.92-1.464.937 1.59-.938 1.578c-.118.2-.189.353-.198.46a.732.738 0 00.098.404l.078.129 1.842-1.096.84 1.404zm-8.01-3.704l-1.388-4.15 1.07-.36.87 2.601.804-.27-.818-2.415 1.029-.335.808 2.403.985-.319-.89-2.677 1.138-.387 1.41 4.229-5.017 1.68zm.15-8.45l-.056-.388c-.037-.323-.116-.533-.236-.643a.57.575 0 00-.448-.141.648.654 0 00-.394.21c-.106.126-.14.336-.096.64l.044.466 1.186-.143zm-2.058 1.895l-.316-2.697c-.064-.579.02-1.04.262-1.366.25-.323.632-.519 1.147-.577.529-.066.967.05 1.3.328.329.285.54.759.618 1.41l.1.888 1.948-.226.191 1.632-5.25.608zm-.184-10.32l.17-1.624 3.14.337c.308.037.598.12.855.242.277.123.497.303.68.536.182.233.31.457.368.698.081.32.103.708.052 1.155a5.876 5.926 0 01-.147.827c-.066.3-.17.545-.297.734-.13.195-.296.368-.51.517a1.67 1.683 0 01-.644.274c-.347.07-.646.086-.906.056l-3.126-.33.169-1.627 3.207.347c.289.03.52-.024.698-.17.179-.144.28-.353.314-.628.03-.29-.03-.512-.17-.686-.14-.177-.355-.276-.646-.31l-3.207-.348zm5.261-4.446l.282-.783c.086-.266.11-.47.051-.618a.489.493 0 00-.32-.289.46.464 0 00-.415.034c-.132.081-.245.25-.335.515l-.28.788 1.017.353zm-1.962-.689l.237-.663c.08-.243.103-.428.044-.552-.044-.12-.147-.215-.306-.26a.459.463 0 00-.387.016c-.115.069-.21.215-.29.448l-.246.684.948.327zm-2.497.878l1.005-2.896c.174-.482.42-.802.754-.985.32-.165.66-.197 1.02-.076.289.115.51.29.66.548.092.17.148.393.148.655.208-.331.448-.541.715-.63.272-.098.57-.092.89.02.252.086.463.23.63.42.158.199.264.418.315.666.025.161.013.375-.044.639-.083.373-.132.608-.174.718l-.93 2.666-4.99-1.745zm2.696-6.776l.855-1.396 3.405 2.064 1.325-2.178 1.11.678-2.16 3.572-4.535-2.74zm3.493-5.204l1.05-1.253 4.037 3.412-1.055 1.253-4.032-3.412zm7.329-2.842l1.374-.59c.177.37.277.723.292 1.069.012.34-.054.66-.196.96-.157.303-.414.598-.767.908-.448.364-.86.602-1.25.707-.384.1-.815.075-1.296-.076-.463-.152-.904-.486-1.33-.984-.554-.68-.809-1.343-.753-1.994.054-.665.412-1.26 1.064-1.81.517-.428.997-.652 1.47-.688.46-.044.95.094 1.443.403l-.904 1.173a1.088 1.097 0 00-.35-.171.798.805 0 00-.44-.004.936.944 0 00-.4.2c-.287.24-.412.537-.37.892.024.265.193.574.487.94.38.45.708.704.978.754.284.059.546-.021.79-.226.239-.204.368-.418.373-.651.008-.248-.058-.519-.215-.812m5.35-3.179l-1.382-1.43.347 1.963 1.034-.532zm.822.87l-1.656.84.17.898-1.488.756-.63-5.615 1.59-.813 4.173 3.811-1.522.779-.637-.657zm6.432-5.514l.407 2.854.397-.058c.34-.041.578-.117.713-.211a.778.785 0 00.272-.448c.059-.194.059-.498-.003-.921-.078-.553-.225-.922-.43-1.097-.212-.176-.528-.238-.95-.176l-.406.057zm-1.778-.956l2.4-.345c.473-.064.858-.059 1.167.029.318.09.58.236.81.45.224.214.402.474.53.777.135.305.225.643.274 1 .086.556.086 1.002-.005 1.321-.08.326-.223.615-.416.858a1.771 1.771 0 01-.671.514 3.69 3.721 0 01-.948.289l-2.406.338-.735-5.231zM299.548 132.055l4.364.323-.081 1.126-2.732-.204-.064.839 2.534.187-.091 1.073-2.521-.18-.074 1.03 2.81.21-.088 1.191-4.447-.328.39-5.267zm6.723.617l1.57.438-1.085 3.842 2.453.693-.358 1.245-4.025-1.14 1.445-5.078zm8.92 5.866l.338.219c.26.173.48.246.64.229a.49.49 0 00.39-.244.65.65 0 00.1-.447c-.032-.156-.177-.314-.431-.482l-.39-.262-.647.987zm-.13-2.784l2.272 1.498c.492.323.781.688.87 1.082.095.399 0 .817-.292 1.25-.284.44-.652.698-1.088.773-.441.07-.924-.066-1.475-.428l-.747-.496-1.073 1.637-1.37-.907 2.903-4.41zm5.736 8.061l.921-1.763-1.749.946zm-.558 1.05l-1.326-1.303-.799.438-1.188-1.168 2.443-1.128 2.69-1.243 1.264 1.25-2.298 5.168-1.215-1.206zm4.911 2.294l.372.588c.044.059.125.173.291.328.084.073.167.12.284.124a.455.455 0 00.314-.077.498.498 0 00.243-.346c.02-.136-.054-.34-.218-.588l-.378-.603-.909.574zm-3.536.313l4.456-2.845 1.463 2.293c.272.423.444.771.527 1.041.061.27.042.542-.069.803-.107.267-.306.488-.585.67-.253.161-.495.251-.745.251a1.617 1.617 0 01-.718-.146 2.737 2.737 0 01-.483-.377c.047.195.076.353.071.463-.01.075-.044.199-.093.364-.058.175-.112.3-.159.375l-.862 1.493-1-1.559.897-1.6c.12-.214.179-.367.179-.474a.583.583 0 00-.113-.401l-.071-.122-1.813 1.155-.882-1.384zm6.248 7.12l1.586-1.196-1.982.109.396 1.087zm-.962.708l-.635-1.749-.902.063-.575-1.568 5.65.066.61 1.668-4.29 3.677-.589-1.615.73-.542zm2.53 5.623l1.088-.143.316 2.52-2.237.27c-.378-.439-.667-.83-.821-1.188-.172-.355-.282-.785-.345-1.288-.081-.623-.04-1.143.134-1.562.157-.418.436-.766.828-1.04a3.21 3.21 0 011.402-.5c.57-.074 1.088-.016 1.538.171.451.18.814.484 1.096.912.218.338.362.803.43 1.406.082.576.082 1.016.006 1.315a1.582 1.582 0 01-.4.78 2.046 2.046 0 01-.776.531l-.476-1.525a.853.853 0 00.412-.389c.086-.165.108-.374.086-.603-.059-.36-.206-.627-.476-.807-.276-.18-.683-.236-1.217-.17-.569.07-.953.233-1.176.469-.21.248-.29.566-.25.946.02.18.073.348.142.503.076.166.186.333.338.543l.497-.069-.14-1.082zm3.347 7.927l-.186 1.62-3.126-.352a2.656 2.656 0 01-.863-.246 1.907 1.907 0 01-.676-.538 1.886 1.886 0 01-.36-.693 3.444 3.444 0 01-.044-1.162c.034-.253.083-.533.144-.832.071-.299.177-.542.309-.732.127-.19.299-.357.505-.508.23-.143.44-.233.651-.27.343-.066.65-.087.907-.048l3.131.357-.186 1.615-3.202-.367c-.292-.032-.522.019-.704.162-.176.146-.281.35-.31.63-.033.287.021.513.163.686.138.175.353.28.64.323l3.207.356zm-4.867 6.018l1.992.07-1.607-1.171-.385 1.101zm-1.18-.06l.602-1.754-.737-.527.549-1.579 4.346 3.612-.598 1.69-5.632.138.553-1.62.917.04zm2.918 4.867l-.92 1.564-2.082.007.997 1.829-.913 1.544-1.608-3.33-1.906-1.123.838-1.413 1.904 1.131 3.69-.21z" />
      <path
        d="M335.017 164.99c0 19.344-15.676 35.022-35.012 35.022-19.34 0-35.016-15.678-35.016-35.023 0-19.33 15.675-35.006 35.016-35.006 19.336 0 35.012 15.675 35.012 35.006z"
        fill="none"
        stroke="#000"
        strokeWidth={0.737}
        strokeMiterlimit={10}
      />
      <path
        d="M326.058 164.87c0 14.397-11.662 26.057-26.054 26.057-14.391 0-26.059-11.66-26.059-26.057 0-14.382 11.668-26.045 26.06-26.045 14.391 0 26.053 11.663 26.053 26.045z"
        fill="none"
        stroke="#000"
        strokeWidth={0.737}
        strokeMiterlimit={10}
      />
      <path
        d="M300.007 155.494l2.188 6.265 6.623.148-5.278 4.013 1.919 6.35-5.452-3.775-5.454 3.774 1.91-6.35-5.286-4.012 6.635-.148 2.195-6.265z"
        fill="#fedf00"
        stroke="#000"
        strokeWidth={0.301}
      />
      <path
        d="M312.038 182.853c-.22.184-1.11.284-1.345.323-.238.032-1.172.041-1.566.056-.218.014-.637.075-.855.075-1.914-.218 3.11-.187 3.766-.454m-5.016-1.481c.125-.224.753-1.62.978-2.016.23-.39.75-1.428 1.06-1.86.16-.234.785-.913.934-.609-1.088.94-1.945 2.581-2.402 3.685-.059.12-.416.734-.549.894-.127.158-.075.456-.276.48-.21.027-.063.065-.063.065s.181-.404.318-.64zm7.216 1.067s-.865-.129-1.402-.318c-.534-.18-1.43-.319-2.195-.3-.757.01-1.45.239-2.068.475-.615.228-1.41.248-1.41.248s-.452.07-.241-.034c.2-.1.9-.645.9-.645l.45-.617c.13-.037 2.418-3.04 2.17-3.845.35-.593.76-1.651.606-1.836-.074-.076-1.781.542-2.156.883-.434.374-.74 1.155-.87 1.605-.127.447-.784.817-.784.817-.534.384-.921 1.6-1.103 2.594-.183.983-2.603 1.527-2.603 1.527s-.671.25-.076.44c.103.03.368.478.581.486.297.034 1.8-.61 2.032-.558.275.056.939.228 1.514.413.574.195 1.047.294 1.448.146.407-.146.988-.09 1.424-.005.429.093.909.054 1.186-.031.296-.09 1.075-.523 1.075-.523s.843-.365 1.33-.594c.488-.228.192-.328.192-.328"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M307.661 185.36s-3.332-1.743-3.51-1.785c-.106-.014-1.512-.79-2.157-.99a4.482 4.482 0 00-1.337-.175c-.55.04-1.445.281-1.445.281l.829.338s.776.382 1.156.586c.544.287.568.637.568.637l3.018 1.327.612.44s.556-.768 2.266-.659"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.301}
      />
      <path
        d="M311.013 178.44c1.048-.935 1.56-2.265 2.423-3 .14.1.14.266-.031.561-.163.29-.38.39-.475.541-.176.236-.7.672-.843.934-.126.248-.29.595-.747.859-.454.272-.311.704-.35.886-.036.2-.737.702-1.075 1.322-.065.647-.094.376-.486.606.714-1.077 1.09-1.77 1.584-2.71m-2.355 2.959c-.068.14-2.135 1.315-1.49 1.14.644-.169 2.554-.858 3.096-1.1.664-.289 1.062-.896 1.56-1.391.51-.505 2.083-2.008 2.354-2.588.266-.597.508-1.427-.559-3.29 0 0-.165.355-.563.704-.392.357-.979.751-.979.751l-.684.646s-2.415 4.438-2.735 5.128"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.397}
      />
      <path
        d="M317.055 179.836s-1.323-.119-1.438-.119c-.125 0-.85-.1-1.904-.1-1.044 0-1.436.363-1.71.655-.297.326-1.12 1.08-1.12 1.08l.444-.04c1.058-.824 1.881-.522 2.21-.546.343-.012.756.022 1.814-.353 1.076-.377 1.013-.025.895.012a5.579 5.579 0 01-1.595.322c-.8.044-1.5.199-1.813.199-.316 0-2.645.637-2.645.637s2.52.148 2.792.238c.27.11.694.058 1.044-.11.965-.445 1.402-.53 1.798-.62.4-.078.875-.348.875-.348s.255-.16.49-.588c.243-.438-.137-.319-.137-.319m1.237-6.906c.159-.393.556-1.32.977-1.685.257-.223.7-.328.936-.428.1-.034.824-.068-.08.18-.375.1-.882.322-1.107.699-.316.877-.592 1.641-1.179 2.202a4.41 4.41 0 00-.704 1.041l-.463.161c.848-.52 1.216-1.481 1.62-2.17zm4.096-.493c-.483.16-.652.294-.652.294-1.08.324-1.522 1.002-1.995 1.554-.24.29-.578.505-1.717.994-1.042.447-1.847 1.138-1.866 1.138 0 0-.331.068-.267.229.024.075.306.015.306.015s2.144-.306 3.038-.85c.571-.358.894-.619 1.436-1.455.242-.37.514-1.065.526-.618.042 1.187-1.8 2.337-2.604 2.692-.429.182-1.002.258-1.752.382-.74.136-1.19.095-1.137-.068.076-.236.162-.285.358-.518.353-.42 1.205-.57 1.833-.863.742-.334 1.445-.822 1.798-1.24.36-.424.485-.58.583-.937.274-.934.29-1.452.546-1.785.907-1.116 1.04-1.476 1.083-1.975.01-.114-.47.265-.72.404-.488.29-.669.29-1.668.55-1.015.253-.993.907-1.15 1.216-.046.124-.458.637-.654.732-.196.1-.678.797-.857 1.206-.133.299-.368.513-.556.489-.199-.037.38-2.199.507-2.556.137-.355.164-1.048.164-1.282 0-.224.008-.812-.384-.878-.39-.066-.408-.604-.408-.604-.938.812-.414 2.243-.313 3.092.1.841-.194 2.398-.194 2.398.907.386.194 1.488-.088 1.843-.296.362-.857.428-1.11.747-.267.328-2.165 2.971-2.165 2.971l2.361-.668s.22.039-.132-.229c-.358-.255.115-1.247.419-1.49.58-.455 1.365-.125 1.365-.125s1.095.168 2.437-.364c1.123-.443 1.605-1.16 2.137-1.7.289-.295.818-1.27 1.151-1.849.201-.333.562-.967.341-.892"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M315.692 178.786c.18-.074.207-.106.538-.467.325-.36.038-.967-.465-.943-.246.016-.508-.04-.991.61-.467.65.224.89.486.916.112.006.26-.043.432-.116"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.42}
      />
      <path
        d="M314.47 174.67c-.312.523-.48 1.124-.234 1.31.056.03.274.221.458.221.181 0 .695-.246.988-.698.293-.438.533-.92-.067-1.219-.544-.268-.918-.016-1.144.385"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.429}
      />
      <path
        d="M316.258 168.278s.049-.08-.157-.295c-.326-.333-.734-.927-.734-.927-.65.355-.865 1.072-.865 1.357 0 .296.11.94.01 1.597-.034.224-.071.48-.392 1.292-.328.802.047 1.539.12 1.8.056.257.323 1.06.323 1.06s.255-.164.341-.183c.1-.027.446-.012.446-.012s.39-.707.405-1.1c.008-.29-.039-.781-.176-1.535-.191-1.097-.179-1.41-.049-2.023.13-.623.728-1.031.728-1.031"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M317.225 169.373s.37-.088.555-.422c.234-.403.172-.831.172-.831-.57-1.106-1.338-.214-1.338-.214-.686 1.406.611 1.467.611 1.467"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.414}
      />
      <path
        d="M319.17 167.345c-.852.044-1.271 1.576-1.271 1.576s-.138.378-.593.67c-.483.299-.198.728-.198 1.49 0 .763-.531 2.11-.531 2.11l-.199.457s.02.343.33-.28c.528-1.048 1.107-.794 1.325-1.922.138-.838 1.527-1.105 1.527-1.105l-.39-.073c-1.444-.677.083-2.364.33-2.663.262-.298.511-.298-.33-.26"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.492}
      />
      <path
        d="M318.926 169.161c-.39.836.72.877.976.73.104-.059.338-.337.338-.337.45-.647.039-1.086-.196-1.148-.226-.076-.709-.132-1.118.755"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.419}
      />
      <path
        d="M316.818 165.915c.292.542 1.105 2.053 1.296 1.958.12-.059.025-.367.025-.367s-.025-.409-.157-.903c-.13-.498-.099-1.135-.358-1.544-.253-.409-.857-.892-1.095-1.537-.235-.647-.05-1.87-.031-2.02.025-.142.096-.05-.03-.195-.127-.158-1.155-.706-1.155-.706s.06.4.035 1.122c-.01.175-.059.379-.086.683-.024.29.15.654.571 1.486.49.963.725 1.554.985 2.023m6.168-7.181s-.296.493-.401.603a74.39 74.39 0 01-1.882 1.61c-.081.063-.956.343-1.752 2.495-.799 2.145-.453 4.15-.453 4.15l.387-.048.066-.209.23-1.252c.11-.533.708-1.277 1.105-1.827.377-.537.682-1.31.682-1.31.45-.905.665-1.714 1.11-2.345.018.752-2.838 5.371-3.144 6.943l.845-.129c.676-.617 1.56-1.914 2.159-2.75.602-.84.857-2.15.967-2.731.106-.574.081-3.2.081-3.2"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M317.292 159.209c-.431-.4-.767-.518-.767-.518s.103.783.103 1.26c0 .478.042 1.28.017 1.709-.017.428-.23 1.136.074 1.829.31.683.661 1.03.909 1.461.225.42.638 2.608.638 2.608s-.15-2.958-.021-3.795c.12-.822.16-2.103-.025-2.745-.19-.645-.507-1.4-.928-1.81m1.971-2.888c.13-.252.434-.775.562-1.57.046-.338.078-.885.066-1.265-.01-.253-.11-.693 0-.722.098-.024.016.137.072.512.027.133-.065.503-.083.978-.022.38-.037.696-.206 1.209-.147.452-.014.954-.104 1.095-.098.143-.358.685-.358.685s-.16.438-.132.837c.014.409.039.849.039.849s.189-.35.61-.409c0 0 .096-.683.096-.897 0-.214.274-1.615.414-2.043.19-.627.325-1.72.022-2.986-.084-.343-.145-1.416-.145-1.416s-.404.324-.644 1.547c-.074.372.083 1.37.022 2.432-.025.586-.587 2.961-.663 3.11"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M319.263 156.32c-.02.037-.026.052-.026.052s.017-.015.026-.051"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M317.67 150.155c.216 0 .216.234.172.418-.034.19-.03.543-.03.616 0 .082.091.586.162.848.079.27.214.355.155.898-.04.34-.39.741-.267 1.32.066.304.284.623.392.885.09.183.04.628.065.993.01.355.207.595.207.595s-.243.453-.324-.114c-.088-.65-.117-.939-.242-1.233-.204-.481-.39-1.348-.074-2.016.054-.13.096-.37.096-.654 0-.29-.178-.784-.213-1.09-.029-.244-.01-.757-.01-.942m-1.132 2.72c.051.367.169.577.583 1.374.127.263.417.934.46 1.148.052.214.096.472.096.537 0 .071.047.574.047.574v.21s-1.147-.67-1.65-1.027c-.499-.36-1.067-.853-1.43-1.152-.412-.338-1.392-1.5-1.404-2.432l-.45-.409s-.344 2.07 1.278 3.41c.468.384.978.807 2.068 1.3 1.093.504.95.955 1.405 1.923.449.973.73 1.532.786 1.807.039.294-.125 4.429-.125 4.429l.04.374s.998-3.83 1.479-4.257c0 0-.954-.146-.878-1.644l-.166-.987s-.191-1.187.166-1.924c0 0 .424-1.35.28-2.517-.09-.698-.123-.907-.209-1.576-.13-1.04-.546-2.529-.592-2.709-.143-.523-.192-.603-.358-1.016-.05-.146-.142-.628-.297-.635-.088-.005-.223.62-.223.62s-.2.681-.242.866c-.13.55-.434 1.011-.573 2.247-.025.224-.05.827-.076.907-.015.068-.044.423-.015.56"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M317.479 158.624s-.167-.37-.336-.559c-.34-.401-.799-.742-2.102-1.379-1.299-.647-1.642-1.71-2.303-2.147-.304-.21-.892-.309-.892-.309s.578.795.715 1.07c.177.35.218.589.934 1.255.71.669 1.578.902 2.136 1.068.79.245 1.848 1.001 1.848 1.001m-4.093-6.144c.035.104.37 1.247 1.073 2.135 1.075 1.36 3.145 2.33 3.145 2.33-.193-.846-.53-1.825-.798-2.257-.94-1.52-3.427-2.265-3.427-2.265s-.044-.058.007.056m2.968.641c.557-1.22-1.106-2.385-1.575-3.235.174-.138.38.224.57.465.272.362 1.04 1.41 1.04 1.41l.237-1.116-1.98-1.802c-.025.262-.636.477-.636.477-.297 1.669 2.344 3.8 2.344 3.8"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M312.905 150.293c-.477.214-.647.214-.647.214l.267.707.155.192s.622.9.985 1.012c.151.056.717.155 1.286.399.715.304 1.882 1.325 1.882 1.325s-1.942-2.19-2.686-3.832l-.251-.947-.704.047s.193.664-.287.883"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M305.637 148.892c.223.2.588.504 1.056.783.43.258 1.664.985 2.588 1.16.215.034 1.376.18 1.376.18.047-.508.598-.552.598-.552l-1.644-.18c-1.325-.098-2.334-.652-3.119-1.539 1.054.638 2.567 1.644 3.794 1.59 5.038-.495-1.517-.62-2.086-.985-.603-.372-1.117-.99-1.117-.99l-1.477-.065s-.726-.046.031.598"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M311.569 151.761c.326-.024.553-.085.627-.442.066-.4-.086-.689-.566-.793-.267-.066-.735-.08-.926.394-.208.486.549.797.549.797s.144.064.316.044m.564-2.888c-.426 0-.57.348-.48 1.027.113.683 1.159.384 1.159.384l.193-.1s.143-.11.064-.654c-.073-.557-.507-.657-.936-.657m1.713.48h-.017c-.007.005.017 0 .017 0"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M313.83 149.353c.012-.005.041-.02.152-.051.218-.083.438-.605.438-.605.11-.708-.397-.883-.397-.883-.852-.17-.874.579-.874.579-.236.975.556.965.68.96m-3.796-3.348c.046.323.507.792.578.873.083.072.671.685.87.96.198.275.858 1.521.858 1.521s.115-.019.164-.114c.115-.194-.442-1.704-.498-1.808-.204-.459-.537-.8-.872-1.158-.079-.05-.353-.403-.655-.783.597.763 2.126 2.933 2.576 3.897 0 0-.054-1.027-.11-1.58-.192-1.61-.61-2.108-.746-2.341-.237-.435-.84-.859-1.271-1.007-.431-.155-.941-.37-1.487-.545-.564-.172-.13.336.078.774.26.518.468.982.515 1.31"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M307.93 148.653c.556.471.805.8 1.96.97 1.163.182 1.261.104 1.261.104s.603-.291.297-.546c-1.71-.752-3.329-1.648-4.15-2.654 0 0 .141-.139.734.455.343.348.574.523.784.686.623.435.892.559 1.512.897.33.18 1.156.374 1.156.374s.118-.25.223-.28c.1-.023-.064-.416-.781-.997a5.728 5.728 0 01-1.049-1.138s-.85-.187-1.771-.34c-.686-.11-1.977-1.111-1.955-.839.024.28.193 1.148.541 1.7.35.555.684 1.121 1.237 1.608"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
      <path
        d="M298.317 183.445c-.504.148-4.286 1.568-4.286 1.568l-1.056.424a3.594 3.594 0 012.575.406l4.213-1.95s-.012-.064-.118-.14c-.11-.074-.818-.461-1.328-.308"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.301}
      />
      <path
        d="M292.815 185.565c-.028.024-.056.124.017.155.21.117.154.163 1.108.278.963.104 1.59-.078 1.755-.26.193-.212-2.384-.606-2.88-.173"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.322}
      />
      <path
        d="M286.764 171.96l-.175-1.182s-.22-3.196-.583-3.837c-.07-.142-.038-.474-.269-.48-.44-.033-.44 1.007-.494 1.949-.717 4.75 3.071 8.377 3.071 8.377z"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.418}
      />
      <path
        d="M305.512 186.034s-.398-.089-.146-.399c.241-.295.958-.453 1.1-.453.142-.005.544.029.843.112.302.075.72.341.597.534-.128.183-.536.413-1.094.413-.478 0-.723-.012-.934-.072-.204-.078-.366-.135-.366-.135"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.385}
      />
      <path
        d="M301.405 183.774s-1.301-.598-2.534-1.201c-1.624-.793-3.577-1.895-4.937-3.916-1.702-2.502-3.182-3.842-3.54-4.112-.368-.27-.421-.37-.556-.18-.123.166-.037.309.066.484.35.57 1.21 1.64 1.519 2.213.532 1.026 1.632 2.147 1.622 2.811 0 .093-.321-.065-.321-.065s-2.575-.883-3.619-4.003c-.76-2.262-.436-2.926-.612-4.056-.302-2.01-.363-2.172-1.358-4.424-.027-.056-.607-.997-.686-.788-.107.27.098 1.277.098 1.277l.106 1.16s-.084 2.575-.084 2.73c0 .156-.649 1.764 2.107 4.466 0 0 .042.46-.328.056-.262-.29-2.234-1.805-2.835-4.297-.617-2.493-.708-4.988-.24-6.024.424-.936 1.274-3.225.912-5.224-.042-.209-.1-.822-.233-.661-.056.078-.304 1.09-.453 1.44-.209.479-.532.95-.632 1.281-.194.562-1.145 1.43-.958 3.028.21 1.836.33 2.123.55 2.777.077.238.26.846.14.907-.11.058-.5-.727-.5-.727s-1.744-3.43-.668-6.211c1.088-2.77 3.817-5.396 3.817-5.396s2.217-1.839 2.668-2.267c.177-.165.135-.29.076-.27-.551.139-4.817 1.022-6.316 6.104 0 0-.079.214-.189.16-.137-.06 0-.298 0-.298s.939-3.604 3.572-5.239c2.874-1.792 2.536-1.53 3.487-2.093.598-.372 1.14-.871 1.808-1.977.069-.124.34-.769.304-.878-.03-.11-.16.041-.22.223 0 0-.814 1.258-2.032 1.68-1.222.424-2.215-.18-3.442 1.178-1.23 1.364-2.208 3.254-2.208 3.254s-.32.488-.392.474c-.134-.042.067-.52.067-.52s1.641-3.483 2.96-4.19c1.32-.713 2.496-1.397 3.246-1.975.911-.715 2.481-2.466 3.047-3.07.12-.128.963-.982 1.15-1.259.112-.15.38-.37.335-.409-.12-.09-.919.295-.919.295s-4.347 1.198-7.052 5.283c-.125.19-.423.576-.582.739-.289.299-.433.798-.433.798-.177-.146 1.528-2.278 1.528-2.278l.3-1.378s.504-2.072 1.565-3.534c.105-.134.732-.766.838-.897.21-.229-.4.2-.292.104 0 0-4.055 2.911-4.055 6.578 0 .66-.409 1.26-.975 2.08-.661.95-.882 1.534-1.169 2.95-.203 1.011-.372 1.782-.372 1.782s.04.523-.13.484c-.176-.039-.115-.472-.115-.472s.414-2.733.708-3.575c.287-.817.475-1.374.475-1.374s-.169-2.055.287-3.18c.387-.983 1.367-2.277 1.519-2.6.066-.141.52-1.063.647-2.113.017-.141-.093-.025-.277.386-.446 1.005-.818 1.267-1.55 2.213 0 0-1.88 1.362-2.561 5.413 0 0-.022 1.51-.253 3.877-.166 1.734-.024 3.358.172 4.336.125.598.363.603.216.676-.091.046.058.008-.155-.445-.26-.542-.459-1.377-.459-2.53 0-2.113.184-3.81.184-3.81s.138-3.414-1.278-4.954c-.069-.08.247.691.39 1.46.173.953-.143 2.276-.236 2.791-.09.518-1.034 2.775-.7 4.893 0 0 .798 3.592 1.827 5.333 0 0 .64.75.074.047-.56-.703-1.713-3.498-1.813-3.736-.089-.229-.914-1.967-1.69-2.675-.403-.375-1.508-1.038-1.508-1.038s-.6-.458-.144.15c.36.48.843 1.34 1.073 1.715a20.122 20.122 0 011.274 2.412c.37.812 1.23 3.203 1.23 3.203l.55 1.516s.922.512 1.425 1.071c.411.453 1.264 1.491 1.972 3.34.318.816.954 1.565.954 1.565s-.135.26-.7-.72c-.56-.993-1.106-2.854-2.451-4.304-1.022-1.111-3.771-2.232-3.771-2.232s1.766 3.078 2.205 3.628c.742.88 1.815 2.116 2.092 2.442.287.333 1.948 2.385 2.193 2.714.387.513.642.739.845.948.439.467 1.737 1.318 1.837 1.452.02.136.046.024-.065-.057-.575-.343-1.263-.885-1.974-1.347-.708-.47-3.442-1.636-5.284-4.175-.436-.751-.644-1.05-.791-.973-.225.12 1.24 4.969 4.253 6.51 0 0 3.325 1.479 4.063 1.924.404.243 1.22.603 1.597.907.216.178-.196.168-.223.163-1.766-.139-4.302-.372-5.858-1.274 0 0-.669-.47-.12.19.436.51 1.264 1.767 2.862 2.475 1.6.703 3.925 1.111 4.775 1.155.835.046 3.814.06 4.385.246.559.19 1.51.798 2.053.973.495.16 1.987.732 1.987.732s.449.246.689.334c.27.107 1.387.097 1.466-.112.076-.187-.32-.473-.32-.473"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.301}
      />
      <path
        d="M320.723 158.525c.338.124.488 1.126.488 1.126s-.03-.574-.03-.856c0-.284-.14-1.352-.14-1.352l-.298.214c-.358.285-.556.788-.556.788s.205-.034.536.08"
        fill="#009b3a"
        stroke="#000"
        strokeWidth={0.377}
      />
    </svg>
  );
}

export default SvgPy;