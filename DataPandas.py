import csv


List = []
with open ("Data.csv", "r") as file:
        csvreader = csv.reader(file)
        first = True
        for row in csvreader:
            if first == True:
                  #print(row[15])
                  first = False
            else:
                  #print(row[15])
                  if row[16] == "30890_Activities_Negatively_Affecting_Biodiversity-sensitive_Areas_Eligible_Assets":
                        if row[18] != ' ' and row[18] != '0' :
                              List.append((row[8],row[18]))

                              

sorted_data = sorted(List, key=lambda x: float(x[1]))

smallest = sorted_data.pop(0)


largest = sorted_data.pop(-1)


Length = len(sorted_data)


median = sorted_data[(Length//2)]

#print(sorted_data)

print("Smallest number:", smallest)
print("Largest number:", largest)
print("The average number:", median)                              
            
                
            
