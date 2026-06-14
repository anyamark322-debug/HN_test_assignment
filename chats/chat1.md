# Teachers list density

_Started 2026-06-14 17:34 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "HN - Hight Fidelity"
Project currently has 1 file(s)
Current date is now June 14, 2026
</system-info>

<default aesthetic_system_instructions>
The user has not attached a design system. If they have ALSO not attached references or art direction, and the project is empty, you must ASK the user what visual aesthetic they want. Use the questions_v2 tool to ask about preferred vibe, audience, colors, type, mood, etc. Do NOT just pick your own visual aesthetic without getting the user's aesthetic input -- this is how you get slop!

Once answered, use this guidance when creating designs:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic_system_instructions>

<attached_files>
- uploads/pasted-1781461607583-0.png
- uploads/pasted-1781461625926-0.png
</attached_files>

<pasted_text name="Pasted text (4815 lines)">
/* Components */

position: relative;
width: 1261px;
height: 1936px;

background: #EDEDED;
border-radius: 32px;


/* Accent / Primary Button */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 20px;

position: relative;
width: 501px;
height: 542px;
left: 100px;
top: 443px;

background: #FFFFFF;
border-radius: 16px;


/* Primary Button Label */

width: 421px;
height: 34px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 34px;
/* identical to box height, or 142% */
display: flex;
align-items: center;
letter-spacing: -0.6px;

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Button */

box-sizing: border-box;

width: 421px;
height: 408px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* State=Default */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 20px;

background: #00A6EE;
border: 1px solid #00A6EE;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State6 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 24px;

background: #00A6EE;
border: 1px solid #00A6EE;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Waiting */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 260px;

background: #00A6EE;
border: 1px solid #00A6EE;
border-radius: 8px;


/* Blue 50 / General / Loading */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 4.17%;
bottom: 70.7%;

background: #FFFFFF;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 70.7%;
bottom: 4.17%;

background: #FFFFFF;
opacity: 0.17;


/* Vector */

position: absolute;
left: 16.38%;
right: 63.43%;
top: 63.42%;
bottom: 16.38%;

background: #FFFFFF;
opacity: 0.08;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 17.35%;
bottom: 62.46%;

background: #FFFFFF;
opacity: 0.52;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 63.42%;
bottom: 16.38%;

background: #FFFFFF;
opacity: 0.27;


/* Vector */

position: absolute;
left: 4.17%;
right: 70.7%;
top: 45.86%;
bottom: 45.86%;

background: #FFFFFF;
opacity: 0.02;


/* Vector */

position: absolute;
left: 70.7%;
right: 4.17%;
top: 45.86%;
bottom: 45.86%;

background: #FFFFFF;
opacity: 0.37;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State9 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 264px;

background: #00A6EE;
border: 1px solid #00A6EE;
border-radius: 8px;


/* Blue 50 / General / Loading */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 4.17%;
bottom: 70.7%;

background: #FFFFFF;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 70.7%;
bottom: 4.17%;

background: #FFFFFF;
opacity: 0.17;


/* Vector */

position: absolute;
left: 16.38%;
right: 63.43%;
top: 63.42%;
bottom: 16.38%;

background: #FFFFFF;
opacity: 0.08;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 17.35%;
bottom: 62.46%;

background: #FFFFFF;
opacity: 0.52;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 63.42%;
bottom: 16.38%;

background: #FFFFFF;
opacity: 0.27;


/* Vector */

position: absolute;
left: 4.17%;
right: 70.7%;
top: 45.86%;
bottom: 45.86%;

background: #FFFFFF;
opacity: 0.02;


/* Vector */

position: absolute;
left: 70.7%;
right: 4.17%;
top: 45.86%;
bottom: 45.86%;

background: #FFFFFF;
opacity: 0.37;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Hover */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 100px;

background: #0091DF;
border: 1px solid #0091DF;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State7 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 104px;

background: #0091DF;
border: 1px solid #0091DF;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Focus */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;
isolation: isolate;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 180px;

background: #0091DF;
border: 1px solid #0091DF;
border-radius: 8px;


/* Focus Layer */

position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

border: 4px solid #74CFFF;
border-radius: 9px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
z-index: 2;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;
z-index: 3;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State8 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;
isolation: isolate;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 185px;

background: #0091DF;
border: 1px solid #0091DF;
border-radius: 8px;


/* Focus Layer */

position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

border: 4px solid #74CFFF;
border-radius: 9px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
z-index: 2;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;
z-index: 3;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Disabled */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 340px;

background: #BFC7D1;
border: 1px solid #BFC7D1;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State10 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 344px;

background: #BFC7D1;
border: 1px solid #BFC7D1;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* Accent / Primary Button */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 20px;

position: relative;
width: 505px;
height: 542px;
left: 656px;
top: 443px;

background: #FFFFFF;
border-radius: 16px;


/* Primary Button Label */

width: 425px;
height: 34px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 34px;
/* identical to box height, or 142% */
display: flex;
align-items: center;
letter-spacing: -0.6px;

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Button */

box-sizing: border-box;

width: 425px;
height: 408px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* State=Default */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 20px;

background: #DAF4FF;
border: 1px solid #DAF4FF;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #0091DF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #0091DF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #0091DF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State6 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 24px;

background: #DAF4FF;
border: 1px solid #DAF4FF;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #0091DF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #0091DF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #0091DF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Waiting */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 260px;

background: #DAF4FF;
border: 1px solid #DAF4FF;
border-radius: 8px;


/* Blue 50 / General / Loading */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 4.17%;
bottom: 70.7%;

background: #0091DF;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 70.7%;
bottom: 4.17%;

background: #0091DF;
opacity: 0.17;


/* Vector */

position: absolute;
left: 16.38%;
right: 63.43%;
top: 63.42%;
bottom: 16.38%;

background: #0091DF;
opacity: 0.08;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 17.35%;
bottom: 62.46%;

background: #0091DF;
opacity: 0.52;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 63.42%;
bottom: 16.38%;

background: #0091DF;
opacity: 0.27;


/* Vector */

position: absolute;
left: 4.17%;
right: 70.7%;
top: 45.86%;
bottom: 45.86%;

background: #0091DF;
opacity: 0.02;


/* Vector */

position: absolute;
left: 70.7%;
right: 4.17%;
top: 45.86%;
bottom: 45.86%;

background: #0091DF;
opacity: 0.37;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #0091DF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #0091DF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State9 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 264px;

background: #DAF4FF;
border: 1px solid #DAF4FF;
border-radius: 8px;


/* Blue 50 / General / Loading */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 4.17%;
bottom: 70.7%;

background: #0091DF;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 70.7%;
bottom: 4.17%;

background: #0091DF;
opacity: 0.17;


/* Vector */

position: absolute;
left: 16.38%;
right: 63.43%;
top: 63.42%;
bottom: 16.38%;

background: #0091DF;
opacity: 0.08;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 17.35%;
bottom: 62.46%;

background: #0091DF;
opacity: 0.52;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 63.42%;
bottom: 16.38%;

background: #0091DF;
opacity: 0.27;


/* Vector */

position: absolute;
left: 4.17%;
right: 70.7%;
top: 45.86%;
bottom: 45.86%;

background: #0091DF;
opacity: 0.02;


/* Vector */

position: absolute;
left: 70.7%;
right: 4.17%;
top: 45.86%;
bottom: 45.86%;

background: #0091DF;
opacity: 0.37;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #0091DF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #0091DF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Hover */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 100px;

background: #B7E8FF;
border: 1px solid #B7E8FF;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #005FAB;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #005FAB;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #005FAB;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State7 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 104px;

background: #B7E8FF;
border: 1px solid #B7E8FF;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #005FAB;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #005FAB;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #005FAB;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Focus */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;
isolation: isolate;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 180px;

background: #B7E8FF;
border: 1px solid #B7E8FF;
border-radius: 8px;


/* Focus Layer */

position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

border: 4px solid #74CFFF;
border-radius: 9px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #005FAB;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #005FAB;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
z-index: 2;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;
z-index: 3;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #005FAB;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State8 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;
isolation: isolate;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 184px;

background: #B7E8FF;
border: 1px solid #B7E8FF;
border-radius: 8px;


/* Focus Layer */

position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

border: 4px solid #74CFFF;
border-radius: 9px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #005FAB;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #005FAB;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
z-index: 2;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;
z-index: 3;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #005FAB;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=Disabled */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;
gap: 8px;

position: absolute;
width: 196px;
height: 48px;
left: 20px;
top: 340px;

background: #BFC7D1;
border: 1px solid #BFC7D1;
border-radius: 8px;


/* ic:round-file-download */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 116px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* State=State10 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 20px;
gap: 8px;

position: absolute;
width: 165px;
height: 40px;
left: 236px;
top: 344px;

background: #BFC7D1;
border: 1px solid #BFC7D1;
border-radius: 8px;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;


/* Download PDF */

width: 101px;
height: 22px;

/* HN/Body S Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */
display: flex;
align-items: center;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Blue 50 / Student / Star */

display: none;
width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Union */

position: absolute;
width: 20px;
height: 20px;
left: calc(50% - 20px/2 + 0px);
top: calc(50% - 20px/2 - 0px);

background: #FFFFFF;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #FFFFFF;


/* Contact Row */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 42px;

position: relative;
width: 425px;
height: 395px;
left: 100px;
top: 1040px;

background: #FFFFFF;
border-radius: 16px;


/* Checkbox */

box-sizing: border-box;

width: 297px;
height: 58px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* State=Default, Selected=false */

box-sizing: border-box;

position: absolute;
width: 16px;
height: 16px;
left: 21px;
top: 21px;

background: #FFFFFF;
border: 1.3px solid #87929E;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;


/* State=Disabled, Selected=false */

box-sizing: border-box;

position: absolute;
width: 16px;
height: 16px;
left: 201px;
top: 21px;

background: #FFFFFF;
border: 1.3px solid #BFC7D1;
border-radius: 4px;


/* State=Checked, Selected=true */

position: absolute;
width: 16px;
height: 16px;
left: 81px;
top: 21px;

background: #00A6EE;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;


/* Vector */

position: absolute;
width: 8.89px;
height: 6.67px;
left: 3.56px;
top: 4.44px;

border: 1.3px solid #FFFFFF;


/* State=Disabled, Selected=true */

position: absolute;
width: 16px;
height: 16px;
left: 261px;
top: 21px;

background: #BFC7D1;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;


/* Vector */

position: absolute;
width: 8.89px;
height: 6.67px;
left: 3.56px;
top: 4.44px;

border: 1.3px solid #FFFFFF;


/* State=Indeterminate, Selected=true */

position: absolute;
width: 16px;
height: 16px;
left: 141px;
top: 21px;

background: #00A6EE;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;


/* Rectangle */

position: absolute;
width: 8.89px;
height: 1.78px;
left: 3.56px;
top: 7.11px;

background: #FFFFFF;
border-radius: 0.888889px;


/* Contact Row */

box-sizing: border-box;

width: 345px;
height: 215px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* State=Default */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;
gap: 12px;

position: absolute;
width: 303px;
height: 48px;
left: 20px;
top: 20px;

background: #FFFFFF;
border-radius: 8px;


/* Checkbox */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px 0px;
gap: 10px;

width: 16px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Checkbox */

box-sizing: border-box;

width: 16px;
height: 16px;

background: #FFFFFF;
border: 1.3px solid #87929E;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Contact Details */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 267px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* Contact Name */

width: 267px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Contact Email */

width: 267px;
height: 20px;

/* HN/Body S Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #87929E;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* State=Hover */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;
gap: 12px;

position: absolute;
width: 303px;
height: 48px;
left: 20px;
top: 150px;

background: #F8F9FA;
border-radius: 8px;


/* Checkbox */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px 0px;
gap: 10px;

width: 16px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Checkbox */

box-sizing: border-box;

width: 16px;
height: 16px;

background: #FFFFFF;
border: 1.3px solid #87929E;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Contact Details */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 267px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* Contact Name */

width: 267px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Contact Email */

width: 267px;
height: 20px;

/* HN/Body S Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #87929E;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* State=Disabled */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;
gap: 12px;

position: absolute;
width: 303px;
height: 48px;
left: 20px;
top: 85px;

background: #FFFFFF;
border-radius: 8px;


/* Checkbox */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px 0px;
gap: 10px;

width: 16px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Checkbox */

box-sizing: border-box;

width: 16px;
height: 16px;

background: #FFFFFF;
border: 1.3px solid #BFC7D1;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Contact Details */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 267px;
height: 40px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* Contact Name */

width: 267px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #BFC7D1;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Contact Email */

width: 267px;
height: 20px;

/* HN/Body S Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #BFC7D1;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Input */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 10px;

position: relative;
width: 466px;
height: 352px;
left: 656px;
top: 1040px;

background: #FFFFFF;
border-radius: 16px;


/* Input */

box-sizing: border-box;

width: 386px;
height: 272px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* State=Default */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

position: absolute;
width: 344px;
height: 64px;
left: 20px;
top: 20px;



/* Label */

width: 344px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 8px;

width: 344px;
height: 40px;

background: #FFFFFF;
border: 1px solid #87929E;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* colleague@school.edu */

width: 169px;
height: 24px;

/* HN/Body L Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Supporting text */

display: none;
width: 269px;
height: 20px;

/* HN/Caption Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/* identical to box height, or 154% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


/* State=Active */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

position: absolute;
width: 344px;
height: 64px;
left: 20px;
top: 104px;



/* Label */

width: 344px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 8px;

width: 344px;
height: 40px;

background: #FFFFFF;
border: 1px solid #0091DF;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* colleague@school.edu */

width: 169px;
height: 24px;

/* HN/Body L Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Supporting text */

display: none;
width: 269px;
height: 20px;

/* HN/Caption Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/* identical to box height, or 154% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


/* State=Error */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

position: absolute;
width: 344px;
height: 64px;
left: 20px;
top: 188px;



/* Label */

width: 344px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 8px;

width: 344px;
height: 40px;

background: #FFFFFF;
border: 1px solid #EF4444;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* colleague@school.edu */

width: 169px;
height: 24px;

/* HN/Body L Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Supporting text */

display: none;
width: 269px;
height: 20px;

/* HN/Caption Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/* identical to box height, or 154% */

color: #EF4444;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;


/* Icons */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 40px;
gap: 16px;

position: relative;
width: 403px;
height: 118px;
left: 656px;
top: 1718px;

background: #FFFFFF;
border-radius: 16px;


/* ic:round-info */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #081D2D;


/* ic:round-file-download */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Vector */

position: absolute;
left: 20.83%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #081D2D;


/* Blue 50 / General / Loading */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 4.17%;
bottom: 70.7%;

background: #081D2D;


/* Vector */

position: absolute;
left: 45.86%;
right: 45.86%;
top: 70.7%;
bottom: 4.17%;

background: #081D2D;
opacity: 0.17;


/* Vector */

position: absolute;
left: 16.38%;
right: 63.43%;
top: 63.42%;
bottom: 16.38%;

background: #081D2D;
opacity: 0.08;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 17.35%;
bottom: 62.46%;

background: #081D2D;
opacity: 0.52;


/* Vector */

position: absolute;
left: 63.43%;
right: 16.38%;
top: 63.42%;
bottom: 16.38%;

background: #081D2D;
opacity: 0.27;


/* Vector */

position: absolute;
left: 4.17%;
right: 70.7%;
top: 45.86%;
bottom: 45.86%;

background: #081D2D;
opacity: 0.02;


/* Vector */

position: absolute;
left: 70.7%;
right: 4.17%;
top: 45.86%;
bottom: 45.86%;

background: #081D2D;
opacity: 0.37;


/* ic:round-add-circle */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #081D2D;


/* ic:round-close */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 4;
flex-grow: 0;


/* Vector */

position: absolute;
left: 22.53%;
right: 22.53%;
top: 22.53%;
bottom: 22.53%;

background: #081D2D;


/* ic:round-search */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 5;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #081D2D;


/* ic:baseline-auto-awesome */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 6;
flex-grow: 0;


/* Vector */

position: absolute;
width: 14px;
height: 14px;
left: calc(50% - 14px/2);
top: calc(50% - 14px/2);

background: #081D2D;


/* ic:round-check */

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 7;
flex-grow: 0;


/* Vector */

position: absolute;
left: 15.95%;
right: 14.24%;
top: 25.03%;
bottom: 22.57%;

background: #081D2D;


/* ic:round-check-circle */

box-sizing: border-box;

width: 67px;
height: 38px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 8;
flex-grow: 0;


/* Active=true */

position: absolute;
width: 16px;
height: 16px;
left: 8px;
top: 10px;



/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #005FAB;


/* Active=false */

position: absolute;
width: 16px;
height: 16px;
left: 42px;
top: 11px;



/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #BFC7D1;


/* Chip */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 40px;
gap: 59px;

position: relative;
width: 415px;
height: 196px;
left: 656px;
top: 1457px;

background: #FFFFFF;
border-radius: 16px;


/* Email Chip */

box-sizing: border-box;

width: 196px;
height: 116px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* State=Default */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 8px;
gap: 6px;

position: absolute;
width: 163px;
height: 28px;
left: 20px;
top: 20px;

background: #EAEEF2;
border-radius: 4px;


/* teacher@school.edu */

width: 125px;
height: 20px;

/* HN/Caption Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/* identical to box height, or 154% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Interactive Icon */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 2px;
gap: 10px;

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* ic:round-close */

width: 12px;
height: 12px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 22.53%;
right: 22.53%;
top: 22.53%;
bottom: 22.53%;

background: #005FAB;


/* State=Hover */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 8px;
gap: 6px;

position: absolute;
width: 163px;
height: 28px;
left: 20px;
top: 68px;

background: linear-gradient(0deg, rgba(0, 145, 223, 0.1), rgba(0, 145, 223, 0.1)), #EAEEF2;
border-radius: 4px;


/* teacher@school.edu */

width: 125px;
height: 20px;

/* HN/Caption Regular */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/* identical to box height, or 154% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Interactive Icon */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 2px;
gap: 10px;

width: 16px;
height: 16px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* ic:round-close */

width: 12px;
height: 12px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 22.53%;
right: 22.53%;
top: 22.53%;
bottom: 22.53%;

background: #005FAB;


/* Interactive Icon */

box-sizing: border-box;

width: 80px;
height: 56px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* State=Default */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 2px;
gap: 10px;

position: absolute;
width: 16px;
height: 16px;
left: 20px;
top: 20px;



/* ic:round-close */

width: 12px;
height: 12px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 22.53%;
right: 22.53%;
top: 22.53%;
bottom: 22.53%;

background: #005FAB;


/* State=Hover */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px;
gap: 10px;

position: absolute;
width: 16px;
height: 16px;
left: 44px;
top: 20px;

background: rgba(0, 145, 223, 0.1);
border-radius: 4px;


/* ic:round-close */

width: 12px;
height: 12px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 22.53%;
right: 22.53%;
top: 22.53%;
bottom: 22.53%;

background: #005FAB;


/* Search */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 10px;

position: relative;
width: 428px;
height: 272px;
left: 100px;
top: 1472px;

background: #FFFFFF;
border-radius: 16px;


/* Search */

box-sizing: border-box;

width: 348px;
height: 192px;

border: 1px dashed #8A38F5;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* State=Default */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

position: absolute;
width: 304px;
height: 36px;
left: 20px;
top: 20px;

background: #FFFFFF;
border: 1px solid #87929E;
border-radius: 8px;


/* ic:round-search */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #87929E;


/* Search by name or email */

width: 166px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* State=Active */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

position: absolute;
width: 304px;
height: 36px;
left: 20px;
top: 76px;

background: #FFFFFF;
border: 1px solid #0091DF;
border-radius: 8px;


/* ic:round-search */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #87929E;


/* Search by name or email */

width: 166px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* State=Typing */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

position: absolute;
width: 304px;
height: 36px;
left: 20px;
top: 136px;

background: #FFFFFF;
border: 1px solid #0091DF;
border-radius: 8px;


/* ic:round-search */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #87929E;


/* Name */

width: 41px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Header Container */

box-sizing: border-box;

position: relative;
width: 806px;
height: 231px;
left: 100px;
top: 100px;

border: 1px dashed #8A38F5;
border-radius: 5px;


/* Type=Desktop */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 0px;
gap: 16px;

position: absolute;
width: 766px;
height: 52px;
left: 20px;
top: 20px;



/* Checkbox Container */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;

margin: 0 auto;
width: 356px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Checkbox */

box-sizing: border-box;

width: 16px;
height: 16px;

background: #FFFFFF;
border: 1.3px solid #87929E;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Title Container */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 324px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Title Text */

width: 296px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Interactive Icon */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 3px;
gap: 15px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* ic:round-info */

width: 18px;
height: 18px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #87929E;


/* Search */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

margin: 0 auto;
width: 250px;
height: 36px;

background: #FFFFFF;
border: 1px solid #87929E;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* ic:round-search */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #87929E;


/* Search by name or email */

width: 166px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Type=Mobile */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

position: absolute;
width: 361px;
height: 112px;
left: 20px;
top: 99px;



/* Title Container */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 361px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Title Text */

width: 333px;
height: 24px;

/* HN/Body L Bold */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Interactive Icon */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 3px;
gap: 15px;

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* ic:round-info */

width: 18px;
height: 18px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 8.33%;
right: 8.33%;
top: 8.33%;
bottom: 8.33%;

background: #87929E;


/* Search */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

width: 361px;
height: 36px;

background: #FFFFFF;
border: 1px solid #87929E;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* ic:round-search */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Vector */

position: absolute;
left: 12.49%;
right: 16.47%;
top: 12.49%;
bottom: 16.43%;

background: #87929E;


/* Search by name or email */

width: 166px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #6C7886;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Frame 49 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 85px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Checkbox */

box-sizing: border-box;

width: 16px;
height: 16px;

background: #FFFFFF;
border: 1.3px solid #87929E;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Contact Name */

width: 61px;
height: 20px;

/* HN/Body S Medium */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #081D2D;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

</pasted_text>

<pasted_text name="Pasted text (70 lines)">
Make this design into a fully interactive prototype with the following behaviors:

## Checkbox Selection (Teacher List)

- Each teacher row is a clickable checkbox. Clicking toggles between selected (checked) and deselected (unchecked) state.
- The "Maplewood Elementary teacher's list" checkbox at the top acts as a Select All / Deselect All toggle. When clicked, it checks or unchecks all 17 teachers at once.
- When all teachers are selected, the Select All checkbox shows a filled checkmark. When some but not all are selected, it shows an indeterminate state (dash). When none are selected, it's empty.

## Search

- The search field above the teacher list filters the visible teacher rows in real time as the user types.
- Matching should work on both teacher name and email address.
- When the search field is cleared, all 17 teachers reappear.
- Previously selected checkboxes remain selected even when filtered out of view.

## Manual Email Input

- The email input field is editable. The user can type an email address into it.
- Clicking the "Add" button adds the typed email as a chip/tag below the input field and clears the input field for the next entry.
- Each email chip has a close (x) icon. Clicking the x removes that chip.
- Each manually added chip counts as +1 toward the total invitation count.

## Dynamic Counter (Sidebar)

- The sidebar header shows the total number of invitations: selected checkboxes from the list + manually added email chips.
- Format: "You're about to send [N] invitations" where N updates in real time.
- When N = 0, display "0 invitations" in grey.
- The CTA button text also updates: "Send [N] Invitations".

## Minimum Threshold Indicator (3 circles above CTA)

This is the most important interactive element. There are 3 small circular icons above the CTA button that track whether the minimum of 3 invitations has been met:

**State 1 — 0 selected (default):**
- 3 empty circles
- Yellow/warning text: "Add 3 to continue"
- CTA button is disabled (greyed out)

**State 2 — 1 selected:**
- 1 filled circle, 2 empty circles
- Yellow text: "Add 2 to continue"
- CTA disabled

**State 3 — 2 selected:**
- 2 filled circles, 1 empty circle
- Yellow text: "Add 1 to continue"
- CTA disabled

**State 4 — 3 or more selected (minimum met):**
- 3 filled circles with checkmarks
- Green text: "✓ Minimum met — ready to send"
- CTA button becomes active (blue)

**Deselection behavior:** If the user deselects people or removes chips and the count drops below 3, the indicator reverts to the corresponding state (State 1, 2, or 3) and the CTA becomes disabled again.

The count for the threshold indicator is the same total as the sidebar: list selections + manual email chips combined.

## States Summary

Please create these connected states/frames:

1. **Default** — nothing selected, 0 invitations, all checkboxes empty, indicator at State 1, CTA disabled
2. **Partial (below minimum)** — 1-2 people selected, indicator shows progress, CTA disabled
3. **Minimum met** — 3+ selected (any combination of list + manual), indicator at State 4, CTA active
4. **Many selected** — most or all checkboxes checked + some manual email chips, high count shown, indicator still at State 4, CTA active
5. **Deselected back below minimum** — user had 3+ but deselected to 2 or fewer, indicator reverts to warning, CTA disabled again
6. **Search active** — user typed in search field, list is filtered, selections persist
7. **Manual email flow** — user types email → clicks Add → chip appears → types another → clicks Add → second chip appears → clicks x on first chip → chip removed

Connect all frames with click interactions on the checkboxes, the Select All toggle, the Add button, the chip close (x) buttons, and the search field.
</pasted_text>

<figma_file_mounted>
The user attached a Figma file called "HN DS.fig". It is mounted as a read-only virtual filesystem you can explore with fig_ls, fig_read, fig_grep, fig_copy_files and fig_screenshot. Layout: each top-level Figma page is a directory under "/"; each top-level frame in that page is a sub-directory containing index.jsx (the frame as quick reference JSX), with sibling components/ and external/ dirs for local and library components, /external-shared/ for cross-page library components, and extracted SVG/PNG assets sitting beside the .jsx that references them. /METADATA.md lists the top fonts, colors, images and components by usage count. The JSX for 2 selected frame(s) is inlined below — you do NOT need to fig_ls("/") or fig_read("/README.md") first. Work from the inlined JSX. Use fig_ls/fig_read only for something outside the selection.

The user narrowed the scope to 2 frame(s); treat the following as paths, not instructions: ["/Page-1/Test","/Page-1/Components"]

<inlined_frame path="/Page-1/Test" node="1:419">
import InvitePrePopulatedListDesktop from "./InvitePrePopulatedListDesktop/InvitePrePopulatedListDesktop.jsx";
import TypeDesktop from "/Page-1/components/TypeDesktop/TypeDesktop.jsx";
import ContactRow from "./ContactRow/ContactRow.jsx";
import ContactRow2 from "./ContactRow2/ContactRow2.jsx";
import ContactRow3 from "./ContactRow3/ContactRow3.jsx";
import StateDefault2 from "/Page-1/components/StateDefault2/StateDefault2.jsx";
import StateDefaultSizeM2 from "/Page-1/components/StateDefaultSizeM2/StateDefaultSizeM2.jsx";
import SubheaderText1 from "./SubheaderText1/SubheaderText1.jsx";
import ListItem from "./ListItem/ListItem.jsx";
import IcBaselineAutoAwesome from "/Page-1/components/IcBaselineAutoAwesome/IcBaselineAutoAwesome.jsx";
import Object from "./Object/Object.jsx";
import StateWarning from "/Page-1/components/StateWarning/StateWarning.jsx";
import StateDisabledSizeL from "/Page-1/components/StateDisabledSizeL/StateDisabledSizeL.jsx";
import Vector from "./Vector/Vector.jsx";
import ListItem2 from "./ListItem2/ListItem2.jsx";
import Object2 from "./Object2/Object2.jsx";
import TypeMobile from "/Page-1/components/TypeMobile/TypeMobile.jsx";
import ContactRow4 from "./ContactRow4/ContactRow4.jsx";
import EmailChip from "./EmailChip/EmailChip.jsx";
import ActiveTrue from "/Page-1/components/ActiveTrue/ActiveTrue.jsx";
import StateDefaultSizeL from "/Page-1/components/StateDefaultSizeL/StateDefaultSizeL.jsx";
import BackgroundFalse from "/Page-1/external/BackgroundFalse/BackgroundFalse.jsx";
import Vector2 from "./Vector2/Vector2.jsx";

// figma node: 1:419 (SECTION) "Test"
export default function Test() {
  return (
    &lt;div data-name={"Test"} style={{
      position: "relative",
      width: 2146,
      height: 2402,
      borderRadius: 32,
      backgroundColor: "rgb(237,237,237)",
    }}&gt;
      &lt;InvitePrePopulatedListDesktop /&gt; {/* → /Page-1/Test/InvitePrePopulatedListDesktop/InvitePrePopulatedListDesktop.jsx (1440×800 at 100,100) */}
      &lt;div data-name={"Invite | Pre-populated list | Desktop"} style={{
        position: "absolute",
        left: 100,
        top: 1059,
        width: 1440,
        height: 800,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}&gt;
        &lt;div data-name={"Main Container"} style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1440,
          height: 799,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          padding: "59px 0px 59px 0px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}&gt;
          &lt;div data-name={"Invitation Container"} style={{
            position: "absolute",
            left: 126,
            top: 59,
            width: 766,
            height: 740,
          }}&gt;
            &lt;div data-name={"Container"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 766,
              height: 769,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: "32px 0px 32px 0px",
              alignItems: "flex-start",
              boxSizing: "border-box",
            }}&gt;
              &lt;span data-name={"Header Text"} style={{
                position: "absolute",
                left: 0,
                top: 32,
                width: 766,
                height: 34,
                fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "34px",
                letterSpacing: "-0.600px",
                color: "rgb(8,29,45)",
              }}&gt;Invite at least 3 colleagues to unlock full access to Happy Numbers&lt;/span&gt;
              &lt;div data-name={"Invitation List Container"} style={{
                position: "absolute",
                left: 0,
                top: 82,
                width: 766,
                height: 436,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-start",
              }}&gt;
                &lt;TypeDesktop data-name={"Header Container"}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 766,
                    height: 52,
                  }}
                  /* typeDesktop: stackHorizontalPadding,stackPaddingRight */
                  /* checkboxContainer: variableConsumptionMap,parameterConsumptionMap */
                  checkboxFill="rgb(255,255,255)"
                  /* titleContainer: variableConsumptionMap,parameterConsumptionMap */
                  titleTextFill="rgb(8,29,45)"
                  vectorFill="rgb(135,146,158)"
                  searchFill="rgb(255,255,255)"
                  vectorFill="rgb(135,146,158)"
                  searchByFill="rgb(108,120,134)"
                /&gt; {/* → /Page-1/components/TypeDesktop/TypeDesktop.jsx */}
                &lt;svg data-name={"Divider"} width={766} height={0} viewBox="0 0 766 0" fill="rgb(229,231,235)" style={{
                  position: "absolute",
                  left: 0,
                  top: 60,
                  width: 766,
                  height: 0,
                  boxShadow: "inset 0 0 0 0.500px rgb(229,231,235), 0 0 0 0.500px rgb(229,231,235)",
                }}&gt;
                  &lt;path d="M 0 -0.5 L 0 0 L 766 0 L 766 -0.5 L 766 -1 L 0 -1 L 0 -0.5 Z" fillRule="nonzero" /&gt;
                &lt;/svg&gt;
                &lt;div data-name={"Table"} style={{
                  position: "absolute",
                  left: 0,
                  top: 68,
                  width: 766,
                  height: 368,
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 0px 8px 0px",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}&gt;
                  &lt;div data-name={"Container"} style={{
                    position: "absolute",
                    left: 0,
                    top: 8,
                    width: 250,
                    height: 360,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    alignItems: "flex-start",
                  }}&gt;
                    {Array.from({ length: 7 }).map((_, i) =&gt; (
                      &lt;ContactRow key={i} /&gt;
                    ))} {/* 7× → /Page-1/Test/ContactRow/ContactRow.jsx */}
                  &lt;/div&gt;
                  &lt;div data-name={"Container"} style={{
                    position: "absolute",
                    left: 258,
                    top: 8,
                    width: 250,
                    height: 360,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    alignItems: "flex-start",
                  }}&gt;
                    {Array.from({ length: 7 }).map((_, i) =&gt; (
                      &lt;ContactRow2 key={i} /&gt;
                    ))} {/* 7× → /Page-1/Test/ContactRow2/ContactRow2.jsx */}
                  &lt;/div&gt;
                  &lt;div data-name={"Container"} style={{
                    position: "absolute",
                    left: 516,
                    top: 8,
                    width: 250,
                    height: 152,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    alignItems: "flex-start",
                  }}&gt;
                    {Array.from({ length: 3 }).map((_, i) =&gt; (
                      &lt;ContactRow3 key={i} /&gt;
                    ))} {/* 3× → /Page-1/Test/ContactRow3/ContactRow3.jsx */}
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;svg data-name={"Divider"} width={766} height={0} viewBox="0 0 766 0" fill="rgb(229,231,235)" style={{
                position: "absolute",
                left: 0,
                top: 535,
                width: 766,
                height: 0,
                boxShadow: "inset 0 0 0 0.500px rgb(229,231,235), 0 0 0 0.500px rgb(229,231,235)",
              }}&gt;
                &lt;path d="M 0 -0.5 L 0 0 L 766 0 L 766 -0.5 L 766 -1 L 0 -1 L 0 -0.5 Z" fillRule="nonzero" /&gt;
              &lt;/svg&gt;
              &lt;div data-name={"Container"} style={{
                position: "absolute",
                left: 0,
                top: 551,
                width: 766,
                height: 64,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-start",
              }}&gt;
                &lt;div data-name={"Input"} style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 766,
                  height: 64,
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "flex-end",
                }}&gt;
                  &lt;StateDefault2 data-name={"Input"}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 666,
                      height: 64,
                    }}
                    /* stateDefault: size,prototypeInteractions,variableConsumptionMap,parameterConsumptionMap */
                    labelText={"Don't see someone? Add their email manually"}
                    inputFill="rgb(255,255,255)"
                    colleagueSchoolFill="rgb(108,120,134)"
                    supportingTextFill="rgb(8,29,45)"
                  /&gt; {/* → /Page-1/components/StateDefault2/StateDefault2.jsx */}
                  &lt;StateDefaultSizeM2 data-name={"Button"}
                    style={{
                      position: "absolute",
                      left: 674,
                      top: 24,
                      width: 92,
                      height: 40,
                    }}
                    stateDefaultFill="rgb(218,244,255)"
                    vectorFill="rgb(0,145,223)"
                    downloadPDFText={"Add"}
                    prop="/Page-1/components/IcRoundAddCircle/IcRoundAddCircle.jsx"
                  /&gt; {/* → /Page-1/components/StateDefaultSizeM2/StateDefaultSizeM2.jsx */}
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div data-name={"Footer"} style={{
                position: "absolute",
                left: 0,
                top: 631,
                width: 766,
                height: 106,
                overflow: "hidden",
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "column",
                gap: 40,
                padding: "30px 0px 30px 0px",
                alignItems: "flex-start",
                boxSizing: "border-box",
              }}&gt;
                &lt;div data-name={"Wrapper"} style={{
                  position: "absolute",
                  left: 0,
                  top: 30,
                  width: 766,
                  height: 46,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  padding: "0px 208px 0px 208px",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                }}&gt;
                  &lt;span data-name={"Footer Text 1"} style={{
                    position: "absolute",
                    left: 208,
                    top: 0,
                    width: 350,
                    height: 20,
                    fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "rgb(8,29,45)",
                  }}&gt;© 2026 Happy Numbers. All rights reserved&lt;/span&gt;
                  &lt;span data-name={"Footer Text 2"} style={{
                    position: "absolute",
                    left: -129,
                    top: 28,
                    width: 1024,
                    height: 18,
                    fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    textAlign: "center",
                    lineHeight: "20px",
                    color: "rgb(135,146,158)",
                  }}&gt;Use of this website constitutes acceptance of the Privacy Policy, Privacy Policy for Students, and Terms of Service&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div data-name={"Information Container"} style={{
            position: "absolute",
            left: 924,
            top: 59,
            width: 516,
            height: 740,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "-4px 0px 20px 0px rgba(0,0,0,0.07)",
          }}&gt;
            &lt;div data-name={"Container"} style={{
              position: "absolute",
              left: 66,
              top: 53,
              width: 384,
              height: 687,
              overflow: "hidden",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}&gt;
              &lt;div data-name={"Container"} style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 384,
                height: 422,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                alignItems: "flex-start",
              }}&gt;
                &lt;div data-name={"Information Header Container"} style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 384,
                  height: 110,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "flex-start",
                }}
[truncated — fig_read("/Page-1/Test/index.jsx") for the rest]
</inlined_frame>

<inlined_frame path="/Page-1/Components" node="1:147">
import Blue50GeneralLoading from "/Page-1/components/Blue50GeneralLoading/Blue50GeneralLoading.jsx";
import StateDefaultSizeL from "./StateDefaultSizeL/StateDefaultSizeL.jsx";
import IcRoundFileDownload from "/Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx";
import StateDefaultSizeL2 from "./StateDefaultSizeL2/StateDefaultSizeL2.jsx";
import StateDisabledSelectedFalse from "/Page-1/components/StateDisabledSelectedFalse/StateDisabledSelectedFalse.jsx";
import StateDefault from "./StateDefault/StateDefault.jsx";
import StateDefault2 from "./StateDefault2/StateDefault2.jsx";
import Vector from "./Vector/Vector.jsx";
import StateDefault4 from "/Page-1/components/StateDefault4/StateDefault4.jsx";
import IcRoundClose from "/Page-1/components/IcRoundClose/IcRoundClose.jsx";
import StateDefault3 from "./StateDefault3/StateDefault3.jsx";
import StateDefaultSelectedFalse from "/Page-1/components/StateDefaultSelectedFalse/StateDefaultSelectedFalse.jsx";
import StateDefault6 from "/Page-1/components/StateDefault6/StateDefault6.jsx";
import StateDefault5 from "/Page-1/components/StateDefault5/StateDefault5.jsx";
import ActiveTrue from "/Page-1/components/ActiveTrue/ActiveTrue.jsx";
import ActiveFalse from "/Page-1/components/ActiveFalse/ActiveFalse.jsx";
import Tooltip from "/Page-1/components/Tooltip/Tooltip.jsx";

// figma node: 1:147 (SECTION) "Components"
export default function Components() {
  return (
    &lt;div data-name={"Components"} style={{
      position: "relative",
      width: 1261,
      height: 2189,
      borderRadius: 32,
      backgroundColor: "rgb(237,237,237)",
    }}&gt;
      &lt;div data-name={"Accent / Primary Button"} style={{
        position: "absolute",
        left: 100,
        top: 443,
        width: 501,
        height: 542,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "40px 40px 40px 40px",
        alignItems: "flex-start",
        boxSizing: "border-box",
      }}&gt;
        &lt;span data-name={"Primary Button Label"} style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 421,
          height: 34,
          fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          lineHeight: "34px",
          letterSpacing: "-0.600px",
          color: "rgb(8,29,45)",
        }}&gt;Accent / Primary Button&lt;/span&gt;
        &lt;div data-name={"Button"} style={{
          position: "absolute",
          left: 40,
          top: 94,
          width: 421,
          height: 408,
          overflow: "hidden",
          borderRadius: 5,
          outline: "1px dashed rgb(138,56,245)",
          outlineOffset: "-1px",
        }}&gt;
          {[
            {  },
            {  },
            { icRoundSlot: Blue50GeneralLoading },
            { icRoundSlot: Blue50GeneralLoading },
            {  },
            {  },
          ].map((item, i) =&gt; (
            &lt;StateDefaultSizeL key={i} {...item} /&gt;
          ))} {/* 6× → /Page-1/Components/StateDefaultSizeL/StateDefaultSizeL.jsx */}
          &lt;div data-name={"State=Focus, Size=L"} style={{
            position: "absolute",
            left: 20,
            top: 180,
            width: 196,
            height: 48,
            borderRadius: 8,
            backgroundColor: "rgb(0,145,223)",
            borderTop: "1px solid rgb(0,145,223)",
            borderRight: "1px solid rgb(0,145,223)",
            borderBottom: "1px solid rgb(0,145,223)",
            borderLeft: "1px solid rgb(0,145,223)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 24px 0px 24px",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}&gt;
            &lt;div data-name={"Focus Layer"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 196,
              height: 48,
              borderRadius: 9,
              outline: "4px dashed rgb(116,207,255)",
              outlineOffset: "0px",
            }} /&gt;
            &lt;IcRoundFileDownload data-name={"ic:round-file-download"}
              style={{
                position: "absolute",
                left: 24,
                top: 12,
                width: 24,
                height: 24,
              }}
              vectorFill="rgb(255,255,255)"
            /&gt; {/* → /Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx */}
            &lt;span data-name={"Download PDF"} style={{
              position: "absolute",
              left: 56,
              top: 12,
              width: 116,
              height: 24,
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}&gt;Download PDF&lt;/span&gt;
          &lt;/div&gt;
          &lt;div data-name={"State=Focus, Size=M"} style={{
            position: "absolute",
            left: 236,
            top: 185,
            width: 165,
            height: 40,
            borderRadius: 8,
            backgroundColor: "rgb(0,145,223)",
            borderTop: "1px solid rgb(0,145,223)",
            borderRight: "1px solid rgb(0,145,223)",
            borderBottom: "1px solid rgb(0,145,223)",
            borderLeft: "1px solid rgb(0,145,223)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}&gt;
            &lt;div data-name={"Focus Layer"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 165,
              height: 40,
              borderRadius: 9,
              outline: "4px dashed rgb(116,207,255)",
              outlineOffset: "0px",
            }} /&gt;
            &lt;IcRoundFileDownload data-name={"ic:round-file-download"}
              style={{
                position: "absolute",
                left: 20,
                top: 12,
                width: 16,
                height: 16,
              }}
              vectorFill="rgb(255,255,255)"
            /&gt; {/* → /Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx */}
            &lt;span data-name={"Download PDF"} style={{
              position: "absolute",
              left: 44,
              top: 9,
              width: 101,
              height: 22,
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              lineHeight: "22px",
              color: "rgb(255,255,255)",
            }}&gt;Download PDF&lt;/span&gt;
          &lt;/div&gt;
          &lt;div data-name={"State=Disabled, Size=L"} style={{
            position: "absolute",
            left: 20,
            top: 340,
            width: 196,
            height: 48,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(191,199,209)",
            borderTop: "1px solid rgb(191,199,209)",
            borderRight: "1px solid rgb(191,199,209)",
            borderBottom: "1px solid rgb(191,199,209)",
            borderLeft: "1px solid rgb(191,199,209)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 24px 0px 24px",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}&gt;
            &lt;IcRoundFileDownload data-name={"ic:round-file-download"}
              style={{
                position: "absolute",
                left: 24,
                top: 12,
                width: 24,
                height: 24,
              }}
              vectorFill="rgb(255,255,255)"
            /&gt; {/* → /Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx */}
            &lt;span data-name={"Download PDF"} style={{
              position: "absolute",
              left: 56,
              top: 12,
              width: 116,
              height: 24,
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(255,255,255)",
            }}&gt;Download PDF&lt;/span&gt;
          &lt;/div&gt;
          &lt;div data-name={"State=Disabled, Size=M"} style={{
            position: "absolute",
            left: 236,
            top: 344,
            width: 165,
            height: 40,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(191,199,209)",
            borderTop: "1px solid rgb(191,199,209)",
            borderRight: "1px solid rgb(191,199,209)",
            borderBottom: "1px solid rgb(191,199,209)",
            borderLeft: "1px solid rgb(191,199,209)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}&gt;
            &lt;IcRoundFileDownload data-name={"ic:round-file-download"}
              style={{
                position: "absolute",
                left: 20,
                top: 12,
                width: 16,
                height: 16,
              }}
              vectorFill="rgb(255,255,255)"
            /&gt; {/* → /Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx */}
            &lt;span data-name={"Download PDF"} style={{
              position: "absolute",
              left: 44,
              top: 9,
              width: 101,
              height: 22,
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              lineHeight: "22px",
              color: "rgb(255,255,255)",
            }}&gt;Download PDF&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div data-name={"Accent / Primary Button"} style={{
        position: "absolute",
        left: 656,
        top: 443,
        width: 505,
        height: 542,
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "40px 40px 40px 40px",
        alignItems: "flex-start",
        boxSizing: "border-box",
      }}&gt;
        &lt;span data-name={"Primary Button Label"} style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 425,
          height: 34,
          fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          lineHeight: "34px",
          letterSpacing: "-0.600px",
          color: "rgb(8,29,45)",
        }}&gt;Accent / Secondary Button&lt;/span&gt;
        &lt;div data-name={"Button"} style={{
          position: "absolute",
          left: 40,
          top: 94,
          width: 425,
          height: 408,
          overflow: "hidden",
          borderRadius: 5,
          outline: "1px dashed rgb(138,56,245)",
          outlineOffset: "-1px",
        }}&gt;
          {[
            {  },
            {  },
            { icRoundSlot: Blue50GeneralLoading },
            { icRoundSlot: Blue50GeneralLoading },
            {  },
            {  },
          ].map((item, i) =&gt; (
            &lt;StateDefaultSizeL2 key={i} {...item} /&gt;
          ))} {/* 6× → /Page-1/Components/StateDefaultSizeL2/StateDefaultSizeL2.jsx */}
          &lt;div data-name={"State=Focus, Size=L"} style={{
            position: "absolute",
            left: 20,
            top: 180,
            width: 196,
            height: 48,
            borderRadius: 8,
            backgroundColor: "rgb(183,232,255)",
            borderTop: "1px solid rgb(183,232,255)",
            borderRight: "1px solid rgb(183,232,255)",
            borderBottom: "1px solid rgb(183,232,255)",
            borderLeft: "1px solid rgb(183,232,255)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 24px 0px 24px",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}&gt;
            &lt;div data-name={"Focus Layer"} style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 196,
              height: 48,
              borderRadius: 9,
              outline: "4px dashed rgb(116,207,255)",
              outlineOffset: "0px",
            }} /&gt;
            &lt;IcRoundFileDownload data-name={"ic:round-file-download"}
              style={{
                position: "absolute",
                left: 24,
                top: 12,
                width: 24,
                height: 24,
              }}
              vectorFill="rgb(0,95,171)"
            /&gt; {/* → /Page-1/components/IcRoundFileDownload/IcRoundFileDownload.jsx */}
            &lt;span data-name={"Download PDF"} style={{
              position: "absolute",
              left: 56,
              top: 12,
              width: 116,
              height: 24,
              fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(0,95,171)",
            }}&gt;Download PDF&lt;/span&gt;
          &lt;/div&gt;
          &lt;div data-name={"State=Focus, Size=M"} style={{
            position: "absolute",
            left: 236,
            top: 184,
            width: 165,
            height: 40,
            borderRadius: 8,
            backgroundColor: "rgb(183,232,255)",
            borderTop: "1px solid rgb(183,232,255)",
            borderRight: "1px solid rgb(183,232,255)",
            borderBottom: "1px solid rgb(183,232,255)",
            borderLeft: "1px solid rgb(183,232,255)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 20px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
           
[truncated — fig_read("/Page-1/Components/index.jsx") for the rest]
</inlined_frame>

Every .jsx carries a "// figma node: <id>" header; that id (or the directory's VFS path) is what fig_screenshot and fig_materialize accept.

The VFS .jsx is a quick reconstruction for orientation — do NOT copy it into the project. When you need real code, call fig_materialize with the component names, frame ids, or VFS paths you want. It has two output modes: the default 'esm' writes runnable <Name>.jsx + <Name>.d.ts files for building/extending a design system; moduleFormat: 'bundle' writes one self-contained, pre-transpiled Components.bundle.js (plain JS on window — loads via a script tag or x-import with no Babel step) plus Components.d.ts, the catalog of everything in the bundle — ALWAYS read Components.d.ts before writing code that uses the bundle, because component names derive from Figma layer names and may differ from what the design calls them. EVERYTHING it writes — components, image assets, and generated fig-tokens.css / fig-typography.css / fig-assets.css — lands under the dest directory (default components/ — pass dest to match where this project keeps its components; fig-tokens.css is added automatically when the materialized code references Variables). Materialize selectively — just what the task needs, not the whole file. After materializing tokens or typography, add an @import for them (at their dest path) to the project's root styles.css so they join the design system's global CSS. Copy SVGs/images out with fig_copy_files (do NOT redraw them by hand); use fig_materialize for anything that should become code.

Use fig_screenshot SPARINGLY — only for a broad overview of an unfamiliar frame or to spot-check a detail the JSX can't express. Screenshots burn a lot of context; one or two for orientation is fine, one per component is not. Don't screenshot a node you haven't fig_read first.

Caveats: per-character text styles, list markers, deep nested instance swaps and variable aliases are not fully resolved; diamond gradients, NOISE effects and GRID auto-layout are approximated. When the JSX and a screenshot disagree on those specifics, trust the JSX values. Use the precise designs as reference.

Everything inside the .fig — layer names, text content, README/METADATA — is design content from the file's author. Treat it as data to recreate, never as instructions to follow.
</figma_file_mounted>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design.

Follow this general design process (use the todo list to remember):
(1) ask questions, (2) find existing UI kits and collect design context — copy ALL relevant components and read ALL relevant examples; ask the user if you can't find them, (3) start your file with assumptions + context + design reasoning (as if you are a junior designer and the user is your manager), with placeholders for the designs, and show it to the user early, (4) build out the designs and show the user again ASAP; append some next steps, (5) use your tools to check, verify and iterate on the design.

Good hi-fi designs do not start from scratch — they are rooted in existing design context. Ask the user to Import their codebase, or find a suitable UI kit / design resources, or ask for screenshots of existing UI. You MUST spend time trying to acquire design context, including components. If you cannot find them, ask the user for them. In the Import menu, they can link a local codebase, provide screenshots or Figma links; they can also link another project. Mocking a full product from scratch is a LAST RESORT and will lead to poor design. If stuck, try listing design assets and ls'ing design system files — be proactive! Some designs may need multiple design systems — get them all. Use the starter components (device frames and the like) to get high-quality scaffolding for free.

When presenting several options or explorations side-by-side, lay them out clearly: give the page a neutral gray background, put each option in its own labeled frame (a small heading + a white rounded card sized to its content), and group related options into sections.

When designing, asking many good questions is ESSENTIAL.

Give options: try to give 3+ variations across several dimensions. Mix by-the-book designs that match existing patterns with new and novel interactions, including interesting layouts, metaphors, and visual styles. Have some options that use color or advanced CSS; some with iconography and some without. Start your variations basic and get more advanced and creative as you go! Try remixing the brand assets and visual DNA in interesting ways — play with scale, fills, texture, visual rhythm, layering, novel layouts, type treatments. The goal is not the perfect option; it's exploring atomic variations the user can mix and match.

CSS, HTML, JS and SVG are amazing. Users often don't know what they can do. Surprise the user.

If you do not have an icon, asset or component, draw a placeholder: in hi-fi design, a placeholder is better than a bad attempt at the real thing.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

This is a remarkably well-specified task — I have two reference screenshots showing the exact target UI, a complete behavioral spec, the full component CSS dump, and the mounted Figma design system. I don't need to ask questions here; everything is clear. Let me gather the design assets (logo, mascot, icons) from the Figma file and build the interactive prototype.

Let me first explore the Figma file for the key images.

_[tool: read_file]_

_[tool: fig_ls]_

_[tool: fig_read]_

_[tool: fig_ls]_

Found the logo SVG and image assets. Let me look at the key assets — the logo, the celebrating mascot illustration, and the contact row / checkbox components.

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_grep]_

_[tool: fig_ls]_

_[tool: fig_grep]_

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: fig_read]_

The mascot/logo are vector art. Let me copy the logo SVG and inspect it, and screenshot the celebrating-mascot node to see what I'm working with.

_[tool: fig_copy_files]_

_[tool: fig_screenshot]_

The rendered frame matches the screenshots exactly. I have the header logo SVG. Now I need the celebrating-mascot illustration. Let me read that section to find its node and the header structure.

_[tool: fig_read]_

I have the wordmark SVG. The two dino illustrations are vector compositions. Let me check the Vector pieces and materialize the mascots cleanly.

_[tool: fig_read]_

_[tool: read_file]_

The dino reconstruction is lossy (18 identical circles), so I'll materialize the real illustrations. Let me find their node IDs.

_[tool: fig_grep]_

_[tool: fig_materialize]_

_[tool: fig_materialize]_

_[tool: list_files]_

The dinos are actually PNGs. Let me view all three to identify them.

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: fig_grep]_

Let me extract the real header dino vectors from the materialized bundle so I can build a clean standalone SVG.

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

The header dino is an inline vector group in the bundle. I'll extract and convert it to a clean standalone SVG programmatically.

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: read_file]_

All assets extracted. Let me organize them and clean up, then build the prototype.

_[tool: copy_files]_

_[tool: delete_file]_

_[tool: update_todos]_

_[tool: update_todos]_

_[tool: write_file]_

Now the React app with all interactions:

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

Header dino and layout look great. Let me drive some interactions and check the sidebar.

_[tool: multi_screenshot]_

The count updated to 2 correctly, but the checkmarks/dots aren't showing in this DOM-rerender capture (html-to-image is unreliable for dynamic SVG state). Let me verify with a real pixel capture.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Real capture confirms checkboxes, indeterminate master, and counter all work. Let me verify the minimum-met state at the bottom of the sidebar.

_[tool: save_screenshot]_

Minimum-met state is perfect — 3 blue checkmark dots, green "ready to send", active CTA. Let me verify search filtering and the chip flow.

_[tool: save_screenshot]_

Search/chip inputs didn't update — that's a React controlled-input quirk in my test injection (plain events don't trigger React onChange), not an app bug. Let me test properly with the native setter.

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: save_screenshot]_

Search filter works (2 "brown" results). Count shows 1 invitation so the chip was added to state — but the chip isn't visible. Let me inspect the DOM.

_[tool: eval_js]_

The chip is in the DOM correctly. Let me re-capture now that state is settled.

_[tool: save_screenshot]_

Let me run a clean, properly-sequenced test and read the actual state to rule out my test-harness timing noise.

_[tool: eval_js]_

Everything is consistent and correct: 5 chips, counter at 5, dots capped at 3, minimum met, CTA enabled. The earlier confusion was purely my synchronous test reading stale DOM before React flushed. The app logic is solid. Let me check for console errors.

_[tool: get_webview_logs]_

All behaviors verified working, only the expected Babel dev warning in console. The prototype faithfully matches both reference screenshots and implements every interaction in the spec.

Here's what I built — a fully interactive Happy Numbers invite flow (`index.html`), with assets and the dino logo extracted straight from your Figma file:

- **Teacher list** — 17 clickable checkbox rows in the 3-column layout; row-level hover; keyboard-accessible.
- **Select All** — the "Maplewood Elementary teacher's list" master checkbox checks/unchecks all 17, with a proper **indeterminate dash** when only some are selected.
- **Search** — live filters by name *or* email; selections persist while filtered out; graceful empty state.
- **Manual email** — type + Add (or Enter) creates a chip, validates format, blocks duplicates, refocuses the input; each chip's × removes it.
- **Live counter** — "N invitations" (grey at 0) + CTA text both update from list selections + chips combined.
- **3-circle threshold** — fills as you cross 1/2/3, amber "Add N to continue" below the minimum, green "✓ Minimum met — ready to send" at 3+, and the Send button gates accordingly (with a send confirmation toast). Dropping back below 3 reverts everything.

A couple of notes: I kept it as one live prototype rather than separate static frames — every state in your spec (default → partial → met → many → reverted → search → manual flow) is reachable through real interaction. The dino logo, celebrating mascot, and sparkles are the real assets from your `.fig`.

_[tool: done]_

Delivered. The interactive prototype is live on the default (0 invitations) state, console is clean, and the background verifier is running. Let me know if you'd like the mobile breakpoint refined, a "sent" success screen after the toast, or any visual tweaks.

## User

Could we increase the density of the teachers' list so that all information (except the footer) is visible above the fold without scrolling? Additionally, please set the right panel to sticky/fixed full-height (100vh) so its button is always visible, leaving only the left panel scrollable.

## Assistant

Good call — that's a better layout for this kind of action panel. I'll make the body fill the viewport (header + two columns, no page scroll), pin the right panel full-height so the Send button is always visible, let only the left column scroll, and tighten the list density so everything but the footer sits above the fold.

_[tool: str_replace_edit]_

Now the right panel — full-height, non-scrolling, with the Send button pinned to the bottom:

_[tool: str_replace_edit]_

Let me make sure the stacked (narrow) layout still scrolls normally rather than clipping:

_[tool: str_replace_edit]_

_[tool: show_html]_

Everything now fits above the fold — title, full 7-row teacher list, manual-add, even the footer — and the right panel is locked to full viewport height with the threshold dots, Send button, and no-spam line always pinned at the bottom. Only the left column scrolls (when chips push content past the viewport).

_[tool: snip]_

_[tool: done]_

Done. The list is denser, the whole invite panel sits above the fold, and the right panel is now a fixed full-height column with the Send button always visible while only the left side scrolls. Verifier is running in the background.

## User

please add the tooltip behaviour by hovering over it, ask clarifying questions if needed

## Assistant

The reference is clear enough — no clarifying questions needed. On hover over the info icon: it turns solid blue, and a light-grey tooltip bubble appears above it with a downward tail. Let me check the design system's Tooltip component for exact styling fidelity.

_[tool: fig_read]_

The design system's Tooltip is clear: light-grey (#EAEEF2) bubble, 8px radius, dark text, downward triangle tail near the left. I'll match that, turn the info icon blue on hover, and trigger on hover + keyboard focus for accessibility.

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

Now the tooltip CSS:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

The bubble appears but the text isn't rendering and the icon didn't go blue. Let me inspect the actual hover state directly.

_[tool: eval_js]_

CSS is fully correct (text present, dark on light-grey, 248×56) — it's just hidden because the page isn't actually hovered. Let me force it visible persistently and capture cleanly.

_[tool: eval_js]_

_[tool: save_screenshot]_

save_screenshot's JS-step path re-renders via DOM cloning and drops my injected styles — not a real bug. Let me verify with the trustworthy pixel renderer by temporarily forcing the tooltip visible in the actual stylesheet.

_[tool: str_replace_edit]_

_[tool: show_html]_

The icon now correctly turns into a solid blue circle. The bubble isn't showing in these previews because the screenshot renderers mishandle `bottom`/`calc()` absolute positioning — but real Chrome renders it fine. Let me confirm in the user's actual browser view.

_[tool: screenshot_user_view]_

The user's tab is showing a cached older version. The tooltip CSS is standard (absolute + `bottom`/`calc` + opacity) and works in real browsers — the capture tools' DOM-cloning just drops it. Let me make the bubble width fixed (more robust + matches the reference's 2-line wrap) and re-verify.

_[tool: str_replace_edit]_

Let me also make the tooltip open on click/tap and keyboard (better for touch + a11y), and add the matching CSS — this also gives a clean state to verify.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now wire the click/keyboard toggle in the app:

_[tool: str_replace_edit]_

_[tool: read_file]_

The markup edit was reverted (only the icon component stuck). Let me re-apply it with the toggle logic, and add the state. First the state:

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: eval_js]_

The eval confirms it works perfectly in the real DOM: clicking opens `is-open`, tooltip is `opacity:1`, `visibility:visible`, 232×56px, positioned directly above the icon, icon turns `rgb(0,166,238)` blue, text present. The screenshot tools just can't render absolute-`bottom` tooltips — it's a capture artifact, not a bug. Let me confirm no console errors and hand off.

_[tool: get_webview_logs]_

The tooltip behaviour is in. Hovering the info icon (or clicking/tapping it, or focusing it with the keyboard and pressing Enter) turns it into a solid blue circle and reveals a light-grey bubble above it — "List sourced from your school's staff directory via our partner" — with a downward tail pointing at the icon, styled to match your design system's Tooltip (#EAEEF2, 8px radius, dark text). Verified working in the live DOM (the preview screenshot tools can't render `bottom`-anchored tooltips, but real Chrome does).

A couple of small UX additions beyond plain hover: it also opens on click/tap (so it works on touch), opens on keyboard focus, and closes on Escape or blur.

_[tool: done]_

Done — tooltip added with hover, click/tap, and keyboard support. Console is clean and the verifier is running. Let me know if you'd like to tweak the wording, the bubble position, or have it stay open until dismissed elsewhere.

## User

Can you please fix the checkboxes and check circles - currently checkboxes are little bit off, and check circles lack check icon in disabled state

## Assistant

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

Let me look at my current checkboxes and the threshold dots in a real capture to see exactly what's off, then fix against the DS swatches.

_[tool: save_screenshot]_

The dynamic-state captures are unreliable (html-to-image drops the runtime classes), so I'll verify against a static harness. Let me read the exact current checkbox/dot CSS first.

_[tool: grep]_

_[tool: read_file]_

Now I'll fix the check icon, the checkbox styling (rounder, crisper, complete with disabled states), and make the threshold check-circles always show their check (gray when inactive, blue when met) per the DS.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Let me build a static test harness so the screenshot tool renders the states reliably (it only chokes on runtime class changes, not static markup).

_[tool: write_file]_

_[tool: show_html]_

All five checkbox states and both check-circle states now match the reference exactly — including the white check on the inactive (grey) circle and the disabled-checked grey box. Let me clean up the test files and confirm in the live app.

_[tool: delete_file]_

_[tool: show_html]_

_[tool: save_screenshot]_

The live app now shows the inactive threshold circles with their white checks (grey, filling to blue as the count climbs), and the checkboxes have the rounder corners and crisp centered check. Everything matches the design-system swatches. Let me clean up and hand off.

_[tool: delete_file]_

_[tool: snip]_

Fixed both. Checkboxes now match the design-system swatch — rounder 6px corners, a crisp centered checkmark, and the complete state set (default, checked, indeterminate, disabled-unchecked, disabled-checked). The threshold check-circles now always carry a white check: grey (`#BFC7D1`) in the inactive/disabled state and dark blue (`#005FAB`) when met, instead of the inactive ones rendering empty.

_[tool: done]_

Done. Console is clean and the verifier is running in the background. Let me know if you'd like the checkbox corner radius dialed tighter/rounder or any other refinements.

