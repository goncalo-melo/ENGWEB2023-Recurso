import json

file = open("dataset_operacoes_estetica.json")
dataset = json.load(file)
file.close()


for consulta in dataset:
    if "operacoes" in consulta:
        i = 0
        for operacao in consulta["operacoes"]:
            operacao["_id"] = i
            i += 1

output = open("dataset.json", "w")
json.dump(dataset, output, ensure_ascii=False)
output.close()

