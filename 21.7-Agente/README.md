# 21.7-Agente — SA-AIC: Personalización de un GPT

Actividad individual del bootcamp (Generation México, Java Full Stack, Cohort 73): construir y probar en TextCortex un agente de IA que analiza archivos de registro (logs), siguiendo el marco CLEAR para definir criterios y el marco TRACI para redactar los prompts.

## Contenido de esta carpeta

- `SA-AIC_Plantilla_Personalizacion_GPT_Isaac.docx`: criterios CLEAR, prompts TRACI y la documentación completa del proceso (introducción, descripción de la herramienta, desafíos y soluciones, casos de uso, instrucciones para el usuario y escenarios de ejemplo).
- `SA-AIC_Checklist_Personalizacion_Isaac.docx`: checklist de cumplimiento y ética para la personalización del GPT (manejo de datos, autorización, supervisión humana, pruebas, etc.).

## Resumen

Se creó en TextCortex una Habilidad (`analizador-de-logs`) con las instrucciones de análisis y un Agente (`Analista de Logs`) con esa Habilidad asignada. Se probó con los 6 logs de ejemplo del curso (servidor, actividad de usuario, depuración y monitoreo), comparando los resultados del agente contra un conteo manual. Los totales de errores y advertencias coincidieron en los 6 casos; se detectaron dos imprecisiones menores en citas de línea, documentadas como hallazgo de la prueba.
