// Simulando a importação do arquivo JSON
const data = [
    {
      "monthYear": "Setembro de 2024",
      "month": 9,
      "year": 2024,
      "groupA": [
        "Rodolfo",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Thiago",
        "Vitor Mello"
      ]
    },
    {
      "monthYear": "Outubro de 2024",
      "month": 10,
      "year": 2024,
      "groupA": [
        "Juliana",
        "Guilherme",
        "Rodolfo"
      ],
      "groupB": [
        "Iago",
        "Vitor Melo",
        "Thiago",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Novembro de 2024",
      "month": 11,
      "year": 2024,
      "groupA": [
        "Juliana",
        "Guilherme",
        "Thiago",
        "Vitor Melo"
      ],
      "groupB": [
        "Iago",
        "Rodolfo",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Dezembro de 2024",
      "month": 12,
      "year": 2024,
      "groupA": [
        "Iago",
        "Juliana",
        "Thiago",
        "Rodolfo"
      ],
      "groupB": [
        "Vitor Mello",
        "Vitor Perez",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Janeiro de 2025",
      "month": 1,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Thiago",
        "Vitor Perez"
      ],
      "groupB": [
        "Vitor Mello",
        "Rodolfo",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Fevereiro de 2025",
      "month": 2,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Thiago",
        "Guilherme"
      ],
      "groupB": [
        "Vitor Mello",
        "Rodolfo",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Março de 2025",
      "month": 3,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Vitor Mello",
        "Rodolfo"
      ],
      "groupB": [
        "Thiago",
        "Vitor Perez",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Abril de 2025",
      "month": 4,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Vitor Mello",
        "Vitor Perez"
      ],
      "groupB": [
        "Thiago",
        "Rodolfo",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Maio de 2025",
      "month": 5,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Vitor Mello",
        "Guilherme"
      ],
      "groupB": [
        "Thiago",
        "Rodolfo",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Junho de 2025",
      "month": 6,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Thiago",
        "Vitor Mello",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Julho de 2025",
      "month": 7,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Thiago",
        "Vitor Mello",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Agosto de 2025",
      "month": 8,
      "year": 2025,
      "groupA": [
        "Iago",
        "Juliana",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Thiago",
        "Vitor Mello",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Setembro de 2025",
      "month": 9,
      "year": 2025,
      "groupA": [
        "Iago",
        "Thiago",
        "Vitor Mello",
        "Rodolfo"
      ],
      "groupB": [
        "Juliana",
        "Vitor Perez",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Outubro de 2025",
      "month": 10,
      "year": 2025,
      "groupA": [
        "Iago",
        "Thiago",
        "Vitor Mello",
        "Vitor Perez"
      ],
      "groupB": [
        "Juliana",
        "Rodolfo",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Novembro de 2025",
      "month": 11,
      "year": 2025,
      "groupA": [
        "Iago",
        "Thiago",
        "Vitor Mello",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Rodolfo",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Dezembro de 2025",
      "month": 12,
      "year": 2025,
      "groupA": [
        "Iago",
        "Thiago",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Juliana",
        "Vitor Mello",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Janeiro de 2026",
      "month": 1,
      "year": 2026,
      "groupA": [
        "Iago",
        "Thiago",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Vitor Mello",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Fevereiro de 2026",
      "month": 2,
      "year": 2026,
      "groupA": [
        "Iago",
        "Thiago",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Vitor Mello",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Março de 2026",
      "month": 3,
      "year": 2026,
      "groupA": [
        "Iago",
        "Vitor Mello",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Juliana",
        "Thiago",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Abril de 2026",
      "month": 4,
      "year": 2026,
      "groupA": [
        "Iago",
        "Vitor Mello",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Thiago",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Maio de 2026",
      "month": 5,
      "year": 2026,
      "groupA": [
        "Iago",
        "Vitor Mello",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Thiago",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Junho de 2026",
      "month": 6,
      "year": 2026,
      "groupA": [
        "Iago",
        "Rodolfo",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Juliana",
        "Thiago",
        "Vitor Mello"
      ]
    },
    {
      "monthYear": "Julho de 2026",
      "month": 7,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Vitor Mello",
        "Rodolfo"
      ],
      "groupB": [
        "Iago",
        "Vitor Perez",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Agosto de 2026",
      "month": 8,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Vitor Mello",
        "Vitor Perez"
      ],
      "groupB": [
        "Iago",
        "Rodolfo",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Setembro de 2026",
      "month": 9,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Vitor Mello",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Rodolfo",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Outubro de 2026",
      "month": 10,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Iago",
        "Vitor Mello",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Novembro de 2026",
      "month": 11,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Vitor Mello",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Dezembro de 2026",
      "month": 12,
      "year": 2026,
      "groupA": [
        "Juliana",
        "Thiago",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Vitor Mello",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Janeiro de 2027",
      "month": 1,
      "year": 2027,
      "groupA": [
        "Juliana",
        "Vitor Mello",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Iago",
        "Thiago",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Fevereiro de 2027",
      "month": 2,
      "year": 2027,
      "groupA": [
        "Juliana",
        "Vitor Mello",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Thiago",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Março de 2027",
      "month": 3,
      "year": 2027,
      "groupA": [
        "Juliana",
        "Vitor Mello",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Thiago",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Abril de 2027",
      "month": 4,
      "year": 2027,
      "groupA": [
        "Juliana",
        "Rodolfo",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Thiago",
        "Vitor Mello"
      ]
    },
    {
      "monthYear": "Maio de 2027",
      "month": 5,
      "year": 2027,
      "groupA": [
        "Thiago",
        "Vitor Mello",
        "Rodolfo",
        "Vitor Perez"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Guilherme"
      ]
    },
    {
      "monthYear": "Junho de 2027",
      "month": 6,
      "year": 2027,
      "groupA": [
        "Thiago",
        "Vitor Mello",
        "Rodolfo",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Vitor Perez"
      ]
    },
    {
      "monthYear": "Julho de 2027",
      "month": 7,
      "year": 2027,
      "groupA": [
        "Thiago",
        "Vitor Mello",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Rodolfo"
      ]
    },
    {
      "monthYear": "Agosto de 2027",
      "month": 8,
      "year": 2027,
      "groupA": [
        "Thiago",
        "Rodolfo",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Vitor Mello"
      ]
    },
    {
      "monthYear": "Setembro de 2027",
      "month": 9,
      "year": 2027,
      "groupA": [
        "Vitor Mello",
        "Rodolfo",
        "Vitor Perez",
        "Guilherme"
      ],
      "groupB": [
        "Iago",
        "Juliana",
        "Thiago"
      ]
    }
  ];

// Função para gerar o calendário
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar');
    
    // Dias da semana começando com Domingo
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    
    data.forEach(monthData => {

        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `<h2>${monthData.monthYear}</h2>`;
        
        // Cria o cabeçalho com os dias da semana
        const weekHeader = document.createElement('div');
        weekHeader.className = 'week-header';
        weekDays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.innerHTML = day;
            weekHeader.appendChild(dayDiv);
        });
        monthDiv.appendChild(weekHeader);

        // Obter o primeiro dia do mês
        const firstDay = new Date(monthData.year, monthData.month - 1);

        const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0); // Último dia do mês
        const weeksInMonth = Math.ceil((lastDay.getDate() + firstDay.getDay()) / 7); // Número de semanas no mês

        for (let weekIndex = 0; weekIndex < weeksInMonth; weekIndex++) {
            const weekDiv = document.createElement('div');
            weekDiv.className = 'week';
            
            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
                const currentDay = new Date(firstDay);
                currentDay.setDate(currentDay.getDate() + (weekIndex * 7) + dayIndex - firstDay.getDay());
                
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';

                if (currentDay.getMonth() === firstDay.getMonth()) {
                    // Verifica se é uma semana par ou ímpar
                    const isEvenWeek = weekIndex % 2 === 0;

                    // Aplica a lógica de grupos
                    if (dayIndex === 1) { // Segunda
                        dayDiv.classList.add(isEvenWeek ? 'group-b' : 'group-a');
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members"><strong>${isEvenWeek ? 'Grupo B' : 'Grupo A'}:</strong> ${isEvenWeek ? monthData.groupB.join(', ') : monthData.groupA.join(', ')}</div>`;
                    } else if (dayIndex === 2) { // Terça
                        dayDiv.classList.add(isEvenWeek ? 'group-b' : 'group-a');
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members"><strong>${isEvenWeek ? 'Grupo B' : 'Grupo A'}:</strong> ${isEvenWeek ? monthData.groupB.join(', ') : monthData.groupA.join(', ')}</div>`;
                    } else if (dayIndex === 3) { // Quarta
                        dayDiv.classList.add('both-groups');
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members"><strong>Grupo A:</strong> ${monthData.groupA.join(', ')}</div><br/><div class="group-members"><strong>Grupo B:</strong> ${monthData.groupB.join(', ')}</div>`;
                    } else if (dayIndex === 4) { // Quinta
                        dayDiv.classList.add(isEvenWeek ? 'group-a' : 'group-b');
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members"><strong>${isEvenWeek ? 'Grupo A' : 'Grupo B'}:</strong> ${isEvenWeek ? monthData.groupA.join(', ') : monthData.groupB.join(', ')}</div>`;
                    } else if (dayIndex === 5) { // Sexta
                        dayDiv.classList.add(isEvenWeek ? 'group-a' : 'group-b');
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members"><strong>${isEvenWeek ? 'Grupo A' : 'Grupo B'}:</strong> ${isEvenWeek ? monthData.groupA.join(', ') : monthData.groupB.join(', ')}</div>`;
                    } else { // Sábado e Domingo
                        dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members">-</div>`;
                    }
                } else {
                    // Dia fora do mês
                    dayDiv.innerHTML = `<div class="week-dates">${currentDay.getDate()}/${currentDay.getMonth() + 1}</div><div class="group-members">-</div>`;
                }

                weekDiv.appendChild(dayDiv);
            }

            monthDiv.appendChild(weekDiv);
        }

        calendarContainer.appendChild(monthDiv);
    });
}

// Chama a função para gerar o calendário
generateCalendar();
