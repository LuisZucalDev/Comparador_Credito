// Variable global para almacenar los datos originales de créditos
let creditosData = [];

// Función principal para cambiar de sección y cargar datos
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll("main > section");
    secciones.forEach(s => s.style.display = "none");

    // Mostramos solo la sección que se pidió por su ID
    document.getElementById(id).style.display = "block";

    if (id === "comparador") {
        cargarDatoCreditos();
    } else if (id === "faq") {
        cargarFAQ();
    } else if (id === "glosario") {
        cargarGlosario();
    }
}

// Función para cargar los datos de los créditos
async function cargarDatoCreditos() {
    const tbody = document.querySelector("#tablaCreditos tbody");
    tbody.innerHTML = '<tr><td colspan="6">Cargando datos...</td></tr>';

    try {
        const response = await fetch('/creditos.json');
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
        }

        const creditos = await response.json();
        creditosData = creditos; // Guardamos los datos globalmente

        mostrarCreditosFiltrados(); // Mostrar datos (filtrados o no)
    } catch (error) {
        console.error("Error al cargar los datos de créditos:", error);
        tbody.innerHTML = '<tr><td colspan="6">❌ Error al cargar las ofertas de créditos. Por favor, intente más tarde.</td></tr>';
    }
}

// Función que muestra los créditos aplicando los filtros seleccionados
function mostrarCreditosFiltrados() {
    const plazoSeleccionado = document.getElementById("filtroPlazo").value;
    const montoMaximo = parseFloat(document.getElementById("filtroMonto").value);
    const tbody = document.querySelector("#tablaCreditos tbody");

    const creditosFiltrados = creditosData.filter(c => {
        // Convertir plazo a número para comparación robusta
        const plazoCredito = parseInt(c.plazo);
        const plazoFiltro = parseInt(plazoSeleccionado);
        const coincidePlazo = plazoSeleccionado === "todos" || plazoCredito === plazoFiltro;

        // Convertir monto a número eliminando símbolos y puntos. También manejar coma decimal
        let montoCredito = parseFloat(
            c.monto.replace(/\./g, '').replace(',', '.').replace(/\$/g, '')
        );

        // Validar el monto
        const coincideMonto = isNaN(montoMaximo) || montoCredito <= montoMaximo;

        return coincidePlazo && coincideMonto;
    });

    // Limpiar la tabla
    tbody.innerHTML = "";

    // Si no hay datos, mostrar mensaje
    if (creditosFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">No hay créditos que coincidan con los filtros seleccionados.</td></tr>';
        return;
    }

    // Mostrar datos filtrados
    creditosFiltrados.forEach(c => {
        const fila = `
        <tr>
            <td>${c.banco}</td>
            <td>${c.cae}</td>
            <td>${c.tasa}</td>
            <td>${c.plazo}</td>
            <td>${c.monto}</td>
            <td>${c.contacto}</td>
        </tr>`;
        tbody.innerHTML += fila;
    });
}





// Función para cargar las Preguntas Frecuentes
async function cargarFAQ() {
    const faqList = document.querySelector("#faqList");
    faqList.innerHTML = '<li>Cargando preguntas frecuentes...</li>';

    try {
        const response = await fetch('/faq.json');
        if (!response.ok) {
            throw new Error(`Error al cargar las preguntas: ${response.status} ${response.statusText}`);
        }

        const faqData = await response.json();
        faqList.innerHTML = "";

        if (faqData.length === 0) {
            faqList.innerHTML = '<li><p>No hay preguntas frecuentes disponibles.</p></li>';
            return;
        }

        faqData.forEach(item => {
            const listItem = `
            <li>
                <strong>${item.pregunta}</strong>
                <p>${item.respuesta}</p>
            </li>`;
            faqList.innerHTML += listItem;
        });
    } catch (error) {
        console.error("Error al cargar las preguntas frecuentes:", error);
        faqList.innerHTML = '<li>Error al cargar las preguntas frecuentes. Por favor, intente más tarde.</li>';
    }
}




// Función para cargar el Glosario
async function cargarGlosario() {
    const glosarioList = document.querySelector("#glosarioList");
    glosarioList.innerHTML = '<dt>Cargando glosario...</dt>';

    try {
        const response = await fetch('/glosario.json');
        if (!response.ok) {
            throw new Error(`Error al cargar el glosario: ${response.status} ${response.statusText}`);
        }

        const glosarioData = await response.json();
        glosarioList.innerHTML = "";

        if (glosarioData.length === 0) {
            glosarioList.innerHTML = '<dt>No hay glosario disponible.</dt>';
            return;
        }

        glosarioData.forEach(item => {
            const definicionItem = `
            <dt>${item.termino}</dt>
            <dd>${item.definicion}</dd>`;
            glosarioList.innerHTML += definicionItem;
        });
    } catch (error) {
        console.error("Error al cargar glosario:", error);
        glosarioList.innerHTML = '<dt>Error al cargar el glosario. Por favor, intente más tarde.</dt>';
    }
}

// Función para limpiar los filtros y NO mostrar créditos
function limpiarFiltros() {
  // Resetear valores de filtros
  document.getElementById('filtroPlazo').value = 'todos';
  document.getElementById('filtroMonto').value = '';

  // Injsertar mensaje de "No hay créditos"
    const tbody = document.querySelector('#tablaCreditos tbody');
    tbody.innerHTML = `
    <tr>
    <td colspan= "6" style="text-align: center; color: black; font-weight: bold;">
        No hay Créditos para mostrar, Selecciona el Botón "Comparador" para ver los Créditos disponibles.
    </td>
    </tr>`;



}// Función para aplicar los filtros seleccionados
function aplicarFiltros() {
  mostrarCreditosFiltrados();
}



