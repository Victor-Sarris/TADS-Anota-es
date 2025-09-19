from ucimlrepo import fetch_ucirepo
from C45 import C45Classifier
import pandas as pd
from sklearn.metrics import accuracy_score

# ---------------------------------------------------- IMPORTAÇÃO DE DATASET ------------------------------------------------------
# fetch dataset
national_poll_on_healthy_aging_npha = fetch_ucirepo(id=936)

# data (as pandas dataframes)
X = national_poll_on_healthy_aging_npha.data.features
y = national_poll_on_healthy_aging_npha.data.targets

# metadata (opcional, pode ser comentado se não quiser ver sempre)
print("METADATA DO DATASET:")
print(national_poll_on_healthy_aging_npha.metadata)
print("\nINFORMAÇÕES DAS VARIÁVEIS:")
print(national_poll_on_healthy_aging_npha.variables)
print("-" * 50)
# ------------------------------------------------------------------------------------------------------------------------------------

# criar uma arvore de decisão com o classificador C45
tree_full = C45Classifier()

# treinamento, passando as features (X) e o alvo (y) separadamente
print("Iniciando o treinamento da árvore de decisão...")
tree_full.fit(X, y)
print("Treinamento concluído.")

# Fazer predições usando o método .predict() que processa todo o conjunto de dados
print("Realizando predições...")
y_pred_full = tree_full.predict(X)
print("Predições finalizadas.")

# Calcular a acurácia
acc_full = accuracy_score(y, y_pred_full)

print(f'\nAcurácia do treino (100% dos dados): {acc_full:.4f}\n')

# Imprimir a árvore de decisão gerada
print("ESTRUTURA DA ÁRVORE DE DECISÃO:")
tree_full.print_tree()