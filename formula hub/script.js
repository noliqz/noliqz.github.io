/* =====================================
   FORMULA HUB
   JAVASCRIPT
===================================== */


/* =====================================
   FORMULA DATABASE
===================================== */

const M = (
  title,
  formula,
  category,
  grade = "ม.4",
  difficulty = "ง่าย",
  description = "สูตรพื้นฐานสำหรับใช้แก้โจทย์ระดับมัธยมศึกษา",
  variables = "ดูจากสัญลักษณ์ในสูตร",
  units = "ตามชนิดของตัวแปร"
) => {

  return {

    subject: "คณิตศาสตร์",

    title_th: title,

    title_en: title,

    formula: formula,

    category: category,

    grade_level: grade,

    difficulty: difficulty,

    description: description,

    variables: variables,

    units: units,

    conditions:
      "ตรวจสอบเงื่อนไขและหน่วยก่อนแทนค่า",

    example_question:
      "กำหนดค่าตัวแปรที่เหมาะสม แล้วจงหาค่าที่โจทย์ถาม",

    solution_steps: [
      "เขียนสูตรที่เกี่ยวข้อง",
      "แทนค่าตัวแปรลงในสูตร",
      "คำนวณและตรวจสอบคำตอบ"
    ],

    answer:
      "ได้คำตอบจากการแทนค่าและคำนวณ",

    related_formulas: [],

    favorite: false
  };
};


const P = (
  title,
  formula,
  category,
  grade = "ม.4",
  difficulty = "ง่าย",
  description =
    "สูตรฟิสิกส์ระดับมัธยมศึกษา ใช้คำนวณปริมาณทางฟิสิกส์",
  variables = "ดูจากสัญลักษณ์ในสูตร",
  units = "SI เป็นหลัก"
) => {

  return {

    subject: "ฟิสิกส์",

    title_th: title,

    title_en: title,

    formula: formula,

    category: category,

    grade_level: grade,

    difficulty: difficulty,

    description: description,

    variables: variables,

    units: units,

    conditions:
      "ใช้หน่วยให้สอดคล้องกันและตรวจสอบทิศทาง/เครื่องหมาย",

    example_question:
      "กำหนดค่าตัวแปรตามโจทย์ แล้วจงหาปริมาณที่ต้องการ",

    solution_steps: [
      "เลือกสูตรที่ตรงกับโจทย์",
      "แปลงหน่วยเป็น SI หากจำเป็น",
      "แทนค่าและคำนวณ",
      "ตรวจสอบหน่วย"
    ],

    answer:
      "ได้ค่าปริมาณที่โจทย์ถามพร้อมหน่วย",

    related_formulas: [],

    favorite: false
  };
};


/* =====================================
   100 FORMULAS
===================================== */

let formulas = [

/* =========================
   MATHEMATICS 1–8
========================= */

M(
  "ผลบวกและผลต่างกำลังสอง",
  "a^2-b^2=(a-b)(a+b)",
  "พีชคณิต"
),

M(
  "กำลังสองสมบูรณ์",
  "(a+b)^2=a^2+2ab+b^2",
  "พีชคณิต"
),

M(
  "กำลังสองผลต่าง",
  "(a-b)^2=a^2-2ab+b^2",
  "พีชคณิต"
),

M(
  "ผลบวกกำลังสาม",
  "a^3+b^3=(a+b)(a^2-ab+b^2)",
  "พีชคณิต"
),

M(
  "ผลต่างกำลังสาม",
  "a^3-b^3=(a-b)(a^2+ab+b^2)",
  "พีชคณิต"
),

M(
  "ทฤษฎีบทเศษเหลือ",
  "P(a)=เศษจากการหาร P(x) ด้วย (x-a)",
  "พีชคณิต"
),

M(
  "ทฤษฎีบทตัวประกอบ",
  "P(a)=0\\Rightarrow(x-a) เป็นตัวประกอบ",
  "พีชคณิต"
),

M(
  "สมการกำลังสอง",
  "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
  "พีชคณิต"
),


/* =========================
   EQUATION
========================= */

M(
  "สมบัติการเท่ากัน",
  "a=b\\Rightarrow a+c=b+c",
  "สมการและอสมการ"
),

M(
  "อสมการคูณจำนวนลบ",
  "a<b,\\ c<0\\Rightarrow ac>bc",
  "สมการและอสมการ"
),

M(
  "สมการค่าสัมบูรณ์",
  "|x|=a\\Rightarrow x=\\pm a",
  "สมการและอสมการ"
),

M(
  "ค่าสัมบูรณ์",
  "|x|\\ge0",
  "สมการและอสมการ"
),

M(
  "อสมการกำลังสอง",
  "ax^2+bx+c\\gtrless0",
  "สมการและอสมการ"
),


/* =========================
   EXPONENT
========================= */

M(
  "กฎเลขยกกำลัง",
  "a^m a^n=a^{m+n}",
  "เลขยกกำลังและลอการิทึม"
),

M(
  "หารเลขยกกำลัง",
  "\\frac{a^m}{a^n}=a^{m-n}",
  "เลขยกกำลังและลอการิทึม"
),

M(
  "กำลังของกำลัง",
  "(a^m)^n=a^{mn}",
  "เลขยกกำลังและลอการิทึม"
),

M(
  "นิยามลอการิทึม",
  "\\log_a b=c\\Leftrightarrow a^c=b",
  "เลขยกกำลังและลอการิทึม"
),

M(
  "เปลี่ยนฐาน",
  "\\log_a b=\\frac{\\log_c b}{\\log_c a}",
  "เลขยกกำลังและลอการิทึม"
),


/* =========================
   SEQUENCE
========================= */

M(
  "ลำดับเลขคณิต",
  "a_n=a_1+(n-1)d",
  "ลำดับและอนุกรม"
),

M(
  "ผลบวกลำดับเลขคณิต",
  "S_n=\\frac n2[2a_1+(n-1)d]",
  "ลำดับและอนุกรม"
),

M(
  "ลำดับเรขาคณิต",
  "a_n=a_1r^{n-1}",
  "ลำดับและอนุกรม"
),

M(
  "ผลบวกลำดับเรขาคณิต",
  "S_n=\\frac{a_1(r^n-1)}{r-1}",
  "ลำดับและอนุกรม"
),

M(
  "อนุกรมเรขาคณิตอนันต์",
  "S_\\infty=\\frac{a_1}{1-r},\\ |r|<1",
  "ลำดับและอนุกรม"
),


/* =========================
   FUNCTION
========================= */

M(
  "ฟังก์ชันเชิงเส้น",
  "f(x)=ax+b",
  "ฟังก์ชัน"
),

M(
  "องค์ประกอบฟังก์ชัน",
  "(f\\circ g)(x)=f(g(x))",
  "ฟังก์ชัน"
),

M(
  "ฟังก์ชันผกผัน",
  "f(f^{-1}(x))=x",
  "ฟังก์ชัน"
),

M(
  "ความชันเส้นตรง",
  "m=\\frac{y_2-y_1}{x_2-x_1}",
  "ฟังก์ชัน"
),


/* =========================
   TRIG
========================= */

M(
  "sin ของมุม",
  "\\sin\\theta=\\frac{ข้าม}{ฉาก}",
  "ตรีโกณมิติ"
),

M(
  "cos ของมุม",
  "\\cos\\theta=\\frac{ชิด}{ฉาก}",
  "ตรีโกณมิติ"
),

M(
  "tan ของมุม",
  "\\tan\\theta=\\frac{ข้าม}{ชิด}",
  "ตรีโกณมิติ"
),

M(
  "เอกลักษณ์ตรีโกณมิติ",
  "\\sin^2\\theta+\\cos^2\\theta=1",
  "ตรีโกณมิติ"
),

M(
  "ผลบวกไซน์",
  "\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B",
  "ตรีโกณมิติ"
),

M(
  "ผลต่างไซน์",
  "\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B",
  "ตรีโกณมิติ"
),

M(
  "ผลบวกโคไซน์",
  "\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B",
  "ตรีโกณมิติ"
),

M(
  "กฎไซน์",
  "\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}",
  "ตรีโกณมิติ"
),


/* =========================
   GEOMETRY
========================= */

M(
  "ทฤษฎีพีทาโกรัส",
  "a^2+b^2=c^2",
  "เรขาคณิต"
),

M(
  "พื้นที่สามเหลี่ยม",
  "A=\\frac12bh",
  "เรขาคณิต"
),

M(
  "พื้นที่วงกลม",
  "A=\\pi r^2",
  "เรขาคณิต"
),

M(
  "เส้นรอบวง",
  "C=2\\pi r",
  "เรขาคณิต"
),

M(
  "ปริมาตรทรงกระบอก",
  "V=\\pi r^2h",
  "เรขาคณิต"
),


/* =========================
   VECTOR
========================= */

M(
  "เวกเตอร์บวก",
  "\\vec a+\\vec b=(a_x+b_x,a_y+b_y)",
  "เวกเตอร์และเมทริกซ์"
),

M(
  "ขนาดเวกเตอร์",
  "|\\vec a|=\\sqrt{a_x^2+a_y^2}",
  "เวกเตอร์และเมทริกซ์"
),

M(
  "ดอทโปรดักต์",
  "\\vec a\\cdot\\vec b=|a||b|\\cos\\theta",
  "เวกเตอร์และเมทริกซ์"
),

M(
  "ดีเทอร์มิแนนต์ 2×2",
  "\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=ad-bc",
  "เวกเตอร์และเมทริกซ์"
),


/* =========================
   CALCULUS
========================= */

M(
  "อนุพันธ์กำลัง",
  "\\frac d{dx}x^n=nx^{n-1}",
  "แคลคูลัส"
),

M(
  "อนุพันธ์ผลบวก",
  "(f+g)'=f'+g'",
  "แคลคูลัส"
),

M(
  "อินทิกรัลกำลัง",
  "\\int x^n dx=\\frac{x^{n+1}}{n+1}+C",
  "แคลคูลัส"
),

M(
  "ทฤษฎีบทมูลฐาน",
  "\\int_a^b f(x)dx=F(b)-F(a)",
  "แคลคูลัส"
),


/* =========================
   STAT
========================= */

M(
  "ความน่าจะเป็น",
  "P(A)=\\frac{n(A)}{n(S)}",
  "ความน่าจะเป็นและสถิติ"
),

M(
  "ค่าเฉลี่ยเลขคณิต",
  "\\bar x=\\frac{\\sum x}{n}",
  "ความน่าจะเป็นและสถิติ"
),


/* =====================================
   PHYSICS
===================================== */

P(
  "อัตราเร็ว",
  "v=\\frac{s}{t}",
  "การเคลื่อนที่",
  "ม.3"
),

P(
  "ความเร็ว",
  "\\vec v=\\frac{\\Delta\\vec x}{\\Delta t}",
  "การเคลื่อนที่"
),

P(
  "ความเร่ง",
  "a=\\frac{\\Delta v}{\\Delta t}",
  "การเคลื่อนที่"
),

P(
  "สมการการเคลื่อนที่ 1",
  "v=u+at",
  "การเคลื่อนที่"
),

P(
  "สมการการเคลื่อนที่ 2",
  "s=ut+\\frac12at^2",
  "การเคลื่อนที่"
),

P(
  "สมการการเคลื่อนที่ 3",
  "v^2=u^2+2as",
  "การเคลื่อนที่"
),

P(
  "ระยะทางจากความเร็วคงที่",
  "s=vt",
  "การเคลื่อนที่",
  "ม.3"
),

P(
  "ความเร็วเฉลี่ย",
  "v_{avg}=\\frac{\\Delta x}{\\Delta t}",
  "การเคลื่อนที่"
),


/* FORCE */

P(
  "กฎข้อที่ 2 ของนิวตัน",
  "\\sum F=ma",
  "แรงและกฎการเคลื่อนที่"
),

P(
  "น้ำหนัก",
  "W=mg",
  "แรงและกฎการเคลื่อนที่"
),

P(
  "แรงเสียดทาน",
  "f=\\mu N",
  "แรงและกฎการเคลื่อนที่"
),

P(
  "กฎข้อที่ 1 นิวตัน",
  "\\sum F=0\\Rightarrow a=0",
  "แรงและกฎการเคลื่อนที่"
),

P(
  "กฎข้อที่ 3 นิวตัน",
  "F_{AB}=-F_{BA}",
  "แรงและกฎการเคลื่อนที่"
),

P(
  "แรงสปริง",
  "F=kx",
  "แรงและกฎการเคลื่อนที่",
  "ม.5"
),

P(
  "แรงสู่ศูนย์กลาง",
  "F_c=\\frac{mv^2}{r}",
  "แรงและกฎการเคลื่อนที่"
),


/* ENERGY */

P(
  "งาน",
  "W=Fs\\cos\\theta",
  "งาน พลังงาน และกำลัง"
),

P(
  "พลังงานจลน์",
  "K=\\frac12mv^2",
  "งาน พลังงาน และกำลัง"
),

P(
  "พลังงานศักย์โน้มถ่วง",
  "U=mgh",
  "งาน พลังงาน และกำลัง"
),

P(
  "พลังงานศักย์สปริง",
  "U_s=\\frac12kx^2",
  "งาน พลังงาน และกำลัง",
  "ม.5"
),

P(
  "กำลัง",
  "P=\\frac Wt",
  "งาน พลังงาน และกำลัง"
),

P(
  "พลังงานกล",
  "E=K+U",
  "งาน พลังงาน และกำลัง"
),

P(
  "อนุรักษ์พลังงาน",
  "E_i=E_f",
  "งาน พลังงาน และกำลัง"
),


/* MOMENTUM */

P(
  "โมเมนตัม",
  "p=mv",
  "โมเมนตัมและการชน"
),

P(
  "อิมพัลส์",
  "J=F\\Delta t=\\Delta p",
  "โมเมนตัมและการชน"
),

P(
  "อนุรักษ์โมเมนตัม",
  "\\sum p_i=\\sum p_f",
  "โมเมนตัมและการชน"
),

P(
  "แรงดลเฉลี่ย",
  "F_{avg}=\\frac{\\Delta p}{\\Delta t}",
  "โมเมนตัมและการชน"
),

P(
  "สัมประสิทธิ์การคืนตัว",
  "e=\\frac{v_2-v_1}{u_1-u_2}",
  "โมเมนตัมและการชน",
  "ม.5"
),


/* CIRCULAR */

P(
  "ความเร็วเชิงมุม",
  "\\omega=\\frac{\\Delta\\theta}{\\Delta t}",
  "การเคลื่อนที่แบบวงกลม"
),

P(
  "ความเร็วเชิงเส้น",
  "v=\\omega r",
  "การเคลื่อนที่แบบวงกลม"
),

P(
  "ความเร่งสู่ศูนย์กลาง",
  "a_c=\\frac{v^2}{r}=\\omega^2r",
  "การเคลื่อนที่แบบวงกลม"
),

P(
  "คาบและความถี่",
  "T=\\frac1f",
  "การเคลื่อนที่แบบวงกลม"
),


/* WAVES */

P(
  "อัตราเร็วคลื่น",
  "v=f\\lambda",
  "คลื่นและเสียง"
),

P(
  "ความถี่",
  "f=\\frac1T",
  "คลื่นและเสียง"
),

P(
  "สมการคลื่น",
  "y=A\\sin(kx-\\omega t)",
  "คลื่นและเสียง",
  "ม.5"
),

P(
  "เลขคลื่น",
  "k=\\frac{2\\pi}{\\lambda}",
  "คลื่นและเสียง",
  "ม.5"
),

P(
  "ความเข้มเสียง",
  "I=\\frac Pt",
  "คลื่นและเสียง",
  "ม.5"
),


/* LIGHT */

P(
  "กฎการสะท้อน",
  "\\theta_i=\\theta_r",
  "แสง",
  "ม.3"
),

P(
  "ดัชนีหักเห",
  "n=\\frac cv",
  "แสง"
),

P(
  "กฎของสเนลล์",
  "n_1\\sin\\theta_1=n_2\\sin\\theta_2",
  "แสง",
  "ม.5"
),

P(
  "สมการเลนส์บาง",
  "\\frac1f=\\frac1u+\\frac1v",
  "แสง",
  "ม.5"
),


/* ELECTRIC */

P(
  "กฎของโอห์ม",
  "V=IR",
  "ไฟฟ้าและวงจรไฟฟ้า"
),

P(
  "กำลังไฟฟ้า",
  "P=VI",
  "ไฟฟ้าและวงจรไฟฟ้า"
),

P(
  "พลังงานไฟฟ้า",
  "E=Pt",
  "ไฟฟ้าและวงจรไฟฟ้า"
),

P(
  "ความต้านทานอนุกรม",
  "R_s=R_1+R_2+\\cdots",
  "ไฟฟ้าและวงจรไฟฟ้า"
),

P(
  "ความต้านทานขนาน",
  "\\frac1{R_p}=\\sum\\frac1{R_i}",
  "ไฟฟ้าและวงจรไฟฟ้า"
),

P(
  "ประจุไฟฟ้า",
  "Q=It",
  "ไฟฟ้าและวงจรไฟฟ้า"
),


/* HEAT */

P(
  "ความร้อน",
  "Q=mc\\Delta T",
  "ความร้อนและอุณหพลศาสตร์"
),

P(
  "ความร้อนแฝง",
  "Q=mL",
  "ความร้อนและอุณหพลศาสตร์"
),


/* MAGNET */

P(
  "แรงแม่เหล็กต่อประจุ",
  "F=qvB\\sin\\theta",
  "แม่เหล็ก",
  "ม.5"
),

P(
  "แรงแม่เหล็กต่อลวด",
  "F=BIL\\sin\\theta",
  "แม่เหล็ก",
  "ม.5"
)

];


/* =====================================
   ADD ID
===================================== */

formulas = formulas.map(
  (formula, index) => ({
    ...formula,
    id: index + 1
  })
);


/* =====================================
   CATEGORY
===================================== */

const categories = [
  ...new Set(
    formulas.map(
      formula => formula.category
    )
  )
];


/* =====================================
   RENDER CATEGORY
===================================== */

document.getElementById("chips").innerHTML =
  categories
    .slice(0, 14)
    .map(
      category => `
        <button
          class="chip"
          onclick="setCategory('${category}')">

          ${category}

        </button>
      `
    )
    .join("");


/* =====================================
   KATEX
===================================== */

function renderFormula(
  formula,
  element
) {

  try {

    katex.render(
      formula,
      element,
      {
        throwOnError: false
      }
    );

  } catch {

    element.textContent =
      formula;

  }

}


/* =====================================
   MAIN RENDER
===================================== */

function render() {

  const search =
    document
      .getElementById("search")
      .value
      .toLowerCase();

  const subject =
    document
      .getElementById("subject")
      .value;

  const grade =
    document
      .getElementById("grade")
      .value;

  const difficulty =
    document
      .getElementById("difficulty")
      .value;


  const result =
    formulas.filter(formula => {

      const text =
        (
          formula.title_th +
          formula.title_en +
          formula.category +
          formula.formula +
          formula.description
        ).toLowerCase();


      return (

        (!subject ||
          formula.subject === subject)

        &&

        (!grade ||
          formula.grade_level === grade)

        &&

        (!difficulty ||
          formula.difficulty === difficulty)

        &&

        text.includes(search)

      );

    });


  document.getElementById(
    "resultTitle"
  ).textContent =
    `สูตรทั้งหมด (${result.length})`;


  const grid =
    document.getElementById("grid");


  if (!result.length) {

    grid.innerHTML = `
      <div class="empty">

        🔎 ไม่พบสูตรที่ค้นหา

      </div>
    `;

    return;
  }


  grid.innerHTML =
    result.map(formula => `

      <article
        class="card"
        onclick="showDetail(${formula.id})">

        <span class="tag">
          ${formula.subject}
        </span>

        <span class="tag">
          ${formula.grade_level}
        </span>

        <h3>
          ${formula.title_th}
        </h3>

        <div
          class="formula"
          id="formula-${formula.id}">
        </div>

        <div class="muted">

          ${formula.category}
          ·
          ${formula.difficulty}

        </div>

        <div class="actions">

          <button
            class="icon-btn"
            onclick="
              event.stopPropagation();
              toggleFavorite(${formula.id});
            ">

            ${formula.favorite ? "★" : "☆"}

          </button>

          <button
            class="primary-btn"
            onclick="
              event.stopPropagation();
              showDetail(${formula.id});
            ">

            ดูรายละเอียด

          </button>

        </div>

      </article>

    `).join("");


  result.forEach(formula => {

    renderFormula(
      formula.formula,
      document.getElementById(
        `formula-${formula.id}`
      )
    );

  });

}


/* =====================================
   DETAIL
===================================== */

function showDetail(id) {

  const formula =
    formulas.find(
      item => item.id === id
    );


  const modalBody =
    document.getElementById(
      "modalBody"
    );


  modalBody.innerHTML = `

    <span class="tag">
      ${formula.subject}
    </span>

    <span class="tag">
      ${formula.category}
    </span>

    <h1>
      ${formula.title_th}
    </h1>

    <div
      id="detailFormula"
      class="detail-formula">
    </div>

    <h3>
      คำอธิบาย
    </h3>

    <p>
      ${formula.description}
    </p>


    <h3>
      ความหมายของตัวแปรและหน่วย
    </h3>

    <table class="variables">

      <tr>
        <th>
          ตัวแปร
        </th>

        <th>
          หน่วย
        </th>
      </tr>

      <tr>

        <td>
          ${formula.variables}
        </td>

        <td>
          ${formula.units}
        </td>

      </tr>

    </table>


    <h3>
      เงื่อนไข / ข้อควรระวัง
    </h3>

    <p>
      ${formula.conditions}
    </p>


    <h3>
      ตัวอย่างโจทย์
    </h3>

    <p>
      ${formula.example_question}
    </p>


    <h3>
      วิธีทำทีละขั้นตอน
    </h3>

    <ol>

      ${formula.solution_steps
        .map(
          step =>
            `<li class="step">${step}</li>`
        )
        .join("")}

    </ol>


    <h3>
      คำตอบ
    </h3>

    <p>
      ${formula.answer}
    </p>


    <div class="actions">

      <button
        class="primary-btn"
        onclick="
          copyFormula('${formula.formula}')
        ">

        📋 คัดลอกสูตร

      </button>


      <button
        class="icon-btn"
        onclick="
          toggleFavorite(${formula.id});
          showDetail(${formula.id});
        ">

        ${formula.favorite
          ? "★ บันทึกแล้ว"
          : "☆ เพิ่มรายการโปรด"}

      </button>


      <button
        class="icon-btn"
        onclick="window.print()">

        🖨 พิมพ์

      </button>

    </div>

  `;


  document
    .getElementById("modal")
    .classList.add("open");


  renderFormula(
    formula.formula,
    document.getElementById(
      "detailFormula"
    )
  );

}


/* =====================================
   MODAL
===================================== */

function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("open");

}


/* =====================================
   FAVORITES
===================================== */

function toggleFavorite(id) {

  const formula =
    formulas.find(
      item => item.id === id
    );


  formula.favorite =
    !formula.favorite;


  saveFavorites();

  render();

}


function saveFavorites() {

  const favorites =
    formulas
      .filter(
        formula =>
          formula.favorite
      )
      .map(
        formula =>
          formula.id
      );


  localStorage.setItem(
    "formulaHubFavorites",
    JSON.stringify(favorites)
  );

}


function loadFavorites() {

  const favorites =
    JSON.parse(
      localStorage.getItem(
        "formulaHubFavorites"
      ) || "[]"
    );


  formulas.forEach(formula => {

    formula.favorite =
      favorites.includes(
        formula.id
      );

  });

}


function showFavorites() {

  const favorites =
    formulas.filter(
      formula =>
        formula.favorite
    );


  document.getElementById(
    "resultTitle"
  ).textContent =
    `สูตรที่บันทึกไว้ (${favorites.length})`;


  const grid =
    document.getElementById(
      "grid"
    );


  if (!favorites.length) {

    grid.innerHTML = `
      <div class="empty">

        ⭐ ยังไม่มีสูตรที่บันทึกไว้

      </div>
    `;

    return;

  }


  grid.innerHTML =
    favorites
      .map(
        formula => `

          <article
            class="card"
            onclick="
              showDetail(${formula.id})
            ">

            <span class="tag">
              ${formula.subject}
            </span>

            <h3>
              ${formula.title_th}
            </h3>

            <div
              class="formula"
              id="fav-${formula.id}">
            </div>

          </article>

        `
      )
      .join("");


  favorites.forEach(
    formula => {

      renderFormula(
        formula.formula,

        document.getElementById(
          `fav-${formula.id}`
        )
      );

    }
  );

}


/* =====================================
   CATEGORY
===================================== */

function setCategory(category) {

  document.getElementById(
    "search"
  ).value = category;


  document.getElementById(
    "subject"
  ).value = "";


  document.getElementById(
    "grade"
  ).value = "";


  document.getElementById(
    "difficulty"
  ).value = "";


  render();


  window.scrollTo({
    top: 400,
    behavior: "smooth"
  });

}


/* =====================================
   SUBJECT
===================================== */

function filterSubject(subject) {

  document.getElementById(
    "subject"
  ).value = subject;


  document.getElementById(
    "search"
  ).value = "";


  render();


  window.scrollTo({
    top: 400,
    behavior: "smooth"
  });

}


/* =====================================
   RANDOM FORMULA
===================================== */

function randomFormula() {

  const random =
    formulas[
      Math.floor(
        Math.random() *
        formulas.length
      )
    ];


  showDetail(
    random.id
  );

}


/* =====================================
   EXAM FORMULAS
===================================== */

function showExam() {

  const result =
    formulas.filter(
      formula =>
        formula.difficulty ===
          "ง่าย" ||
        formula.difficulty ===
          "ปานกลาง"
    ).slice(0, 20);


  document.getElementById(
    "resultTitle"
  ).textContent =
    "สูตรที่ควรรู้ก่อนสอบ";


  const grid =
    document.getElementById(
      "grid"
    );


  grid.innerHTML =
    result.map(
      formula => `

        <article
          class="card"
          onclick="
            showDetail(${formula.id})
          ">

          <span class="tag">
            ${formula.subject}
          </span>

          <span class="tag">
            ${formula.grade_level}
          </span>

          <h3>
            ${formula.title_th}
          </h3>

          <div
            class="formula"
            id="exam-${formula.id}">
          </div>

        </article>

      `
    ).join("");


  result.forEach(
    formula => {

      renderFormula(
        formula.formula,

        document.getElementById(
          `exam-${formula.id}`
        )
      );

    }
  );


  window.scrollTo({
    top: 400,
    behavior: "smooth"
  });

}


/* =====================================
   DARK MODE
===================================== */

function toggleDark() {

  document.body.classList.toggle(
    "dark"
  );


  localStorage.setItem(
    "formulaHubDark",
    document.body.classList.contains(
      "dark"
    )
  );

}


/* =====================================
   COPY FORMULA
===================================== */

function copyFormula(formula) {

  navigator.clipboard.writeText(
    formula
  );


  alert(
    "คัดลอกสูตรเรียบร้อยแล้ว ✓"
  );

}


/* =====================================
   SCIENTIFIC CALCULATOR
===================================== */

let calcDisplayValue = "";
let calcAngleMode = "DEG"; // DEG หรือ RAD

function openCalculator() {
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div style="max-width: 420px; margin: 0 auto;">
      <h2 style="margin: 0 0 5px; text-align: center;">🔬 Scientific Calculator</h2>
      <p class="muted" style="text-align: center; margin-bottom: 15px;">เครื่องคิดเลขวิทยาศาสตร์</p>

      <!-- หน้าจอแสดงผล -->
      <div style="
        background: var(--bg);
        border: 2px solid var(--line);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 15px;
        text-align: right;
      ">
        <div id="calcHistory" style="font-size: 13px; color: var(--muted); min-height: 18px; margin-bottom: 4px; overflow-x: auto;"></div>
        <input 
          id="calcDisplay" 
          type="text" 
          value="0" 
          readonly 
          style="
            width: 100%;
            border: none;
            background: transparent;
            color: var(--text);
            font-size: 28px;
            font-weight: bold;
            text-align: right;
            outline: none;
          "
        >
      </div>

      <!-- ปุ่มกดเครื่องคิดเลข -->
      <div style="
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;
      ">
        <!-- แถวที่ 1: โหมดและฟังก์ชั่นพิเศษ -->
        <button class="icon-btn" style="font-weight:bold; color:var(--primary);" onclick="toggleAngleMode()" id="angleModeBtn">DEG</button>
        <button class="icon-btn" onclick="calcAppend('(')">(</button>
        <button class="icon-btn" onclick="calcAppend(')')">)</button>
        <button class="icon-btn" style="color:#dc2626; font-weight:bold;" onclick="calcClear()">AC</button>
        <button class="icon-btn" style="color:#dc2626;" onclick="calcBackspace()">⌫</button>

        <!-- แถวที่ 2: ตรีโกณ & ล็อก -->
        <button class="icon-btn" onclick="calcAppend('sin(')">sin</button>
        <button class="icon-btn" onclick="calcAppend('cos(')">cos</button>
        <button class="icon-btn" onclick="calcAppend('tan(')">tan</button>
        <button class="icon-btn" onclick="calcAppend('log(')">log</button>
        <button class="icon-btn" onclick="calcAppend('ln(')">ln</button>

        <!-- แถวที่ 3: กำลัง & ราก & ตัวเลข -->
        <button class="icon-btn" onclick="calcAppend('^')">x^y</button>
        <button class="icon-btn" onclick="calcAppend('7')">7</button>
        <button class="icon-btn" onclick="calcAppend('8')">8</button>
        <button class="icon-btn" onclick="calcAppend('9')">9</button>
        <button class="icon-btn" style="background:var(--line);" onclick="calcAppend('÷')">÷</button>

        <!-- แถวที่ 4: สแควร์รูท & ตัวเลข -->
        <button class="icon-btn" onclick="calcAppend('√(')">√</button>
        <button class="icon-btn" onclick="calcAppend('4')">4</button>
        <button class="icon-btn" onclick="calcAppend('5')">5</button>
        <button class="icon-btn" onclick="calcAppend('6')">6</button>
        <button class="icon-btn" style="background:var(--line);" onclick="calcAppend('×')">×</button>

        <!-- แถวที่ 5: ค่าคงตัว & ตัวเลข -->
        <button class="icon-btn" onclick="calcAppend('π')">π</button>
        <button class="icon-btn" onclick="calcAppend('1')">1</button>
        <button class="icon-btn" onclick="calcAppend('2')">2</button>
        <button class="icon-btn" onclick="calcAppend('3')">3</button>
        <button class="icon-btn" style="background:var(--line);" onclick="calcAppend('-')">-</button>

        <!-- แถวที่ 6: ค่า e & ทศนิยม & เครื่องหมายเท่ากับ -->
        <button class="icon-btn" onclick="calcAppend('e')">e</button>
        <button class="icon-btn" onclick="calcAppend('0')">0</button>
        <button class="icon-btn" onclick="calcAppend('.')">.</button>
        <button class="primary-btn" style="grid-column: span 2; font-size:20px;" onclick="calcEvaluate()">=</button>
      </div>
    </div>
  `;

  document.getElementById("modal").classList.add("open");
  calcClear();
}

/* ฟังก์ชั่นทำงานของเครื่องคิดเลขวิทยาศาสตร์ */

function calcAppend(val) {
  if (calcDisplayValue === "0" && !isNaN(val)) {
    calcDisplayValue = val;
  } else {
    calcDisplayValue += val;
  }
  updateCalcDisplay();
}

function calcClear() {
  calcDisplayValue = "";
  document.getElementById("calcHistory").textContent = "";
  updateCalcDisplay();
}

function calcBackspace() {
  calcDisplayValue = calcDisplayValue.slice(0, -1);
  updateCalcDisplay();
}

function toggleAngleMode() {
  calcAngleMode = calcAngleMode === "DEG" ? "RAD" : "DEG";
  document.getElementById("angleModeBtn").textContent = calcAngleMode;
}

function updateCalcDisplay() {
  const display = document.getElementById("calcDisplay");
  display.value = calcDisplayValue || "0";
}

function calcEvaluate() {
  const display = document.getElementById("calcDisplay");
  const history = document.getElementById("calcHistory");

  if (!calcDisplayValue) return;

  try {
    history.textContent = calcDisplayValue + " =";
    
    // แปลงนิพจน์ทางคณิตศาสตร์ให้อยู่ในรูปแบบ JavaScript eval
    let expr = calcDisplayValue
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/π/g, "Math.PI")
      .replace(/\be\b/g, "Math.E")
      .replace(/\^/g, "**")
      .replace(/√\(/g, "Math.sqrt(");

    // จัดการฟังก์ชันตรีโกณมิติ (รองรับ DEG / RAD)
    const toRad = calcAngleMode === "DEG" ? "*(Math.PI/180)" : "";
    
    expr = expr.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin((${p1})${toRad})`);
    expr = expr.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos((${p1})${toRad})`);
    expr = expr.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan((${p1})${toRad})`);
    
    // จัดการ log (ฐาน 10) และ ln (ฐาน e)
    expr = expr.replace(/log\(/g, "Math.log10(");
    expr = expr.replace(/ln\(/g, "Math.log(");

    // คำนวณผลลัพธ์
    let result = eval(expr);

    // ปรับทศนิยมไม่ให้ยาวเกินไป
    if (typeof result === "number") {
      if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(8));
      }
    }

    calcDisplayValue = String(result);
    updateCalcDisplay();
  } catch (err) {
    display.value = "Error";
    calcDisplayValue = "";
  }
}





/* =====================================
   HOME
===================================== */

function home() {

  document.getElementById(
    "search"
  ).value = "";

  document.getElementById(
    "subject"
  ).value = "";

  document.getElementById(
    "grade"
  ).value = "";

  document.getElementById(
    "difficulty"
  ).value = "";

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================
   INITIALIZE
===================================== */

loadFavorites();


if (
  localStorage.getItem(
    "formulaHubDark"
  ) === "true"
) {

  document.body.classList.add(
    "dark"
  );

}


render();