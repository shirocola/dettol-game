# Dettol ProSkin Interactive Game

This interactive quiz game helps users discover which Dettol ProSkin variant matches their preferences based on their answers.

## Quiz Logic

The game now uses the first question to determine the result:

**Question 1: "ความรักที่คุณอยากสัมผัสเป็นรูปแบบได ?"**

### Answer Mapping:
1. **โรแมนติก หอมอบอุ่น (romantic)** → Random selection between Lavender or Sakura
2. **สดใส ขี้อ้อน ใกล้ชิด (fresh)** → Peach  
3. **เรียบง่าย เบาสบาย (simple)** → Honey
4. **ตื่นเต้น เฟรชสดชื่น (fun)** → Apple

## Demo Screenshots (Answer 3 - Honey Result)

### Result Page:
![Honey Result](https://github.com/user-attachments/assets/2b13d735-14d2-4ea6-9404-0c28cc932eb6)

### Quote Page:
![Honey Quote](https://github.com/user-attachments/assets/84866137-37b0-4c43-b3a8-dde7b0b08d7d)

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
