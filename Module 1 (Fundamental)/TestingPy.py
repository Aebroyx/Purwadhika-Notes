import tabulate

# list_RentalMotor = [
#     {
#         'kode' : 'm1' ,
#         'nama' : 'HD Softiel Classic',
#         'tipe' : 'SPORT',
#         'stock': 2,
#         'harga': 3000000
#     },
#     {
#         'kode' : 'm2' ,
#         'nama': 'HD Street 500 cc',
#         'tipe' : 'SPORT',
#         'stock': 5,
#         'harga': 1300000
#     },
#     {
#         'kode' : 'm3' ,
#         'nama' : 'BMW F800GS',
#         'tipe' : 'SPORT',
#         'stock': 2,
#         'harga': 2000000
#     },
#     {
#         'kode' : 'm4' ,
#         'nama': 'BWM G310',
#         'tipe' : 'SPORT',
#         'stock': 5,
#         'harga': 1200000
#     },
#     {
#         'kode' : 'm5' ,
#         'nama': 'Kawasaki Z900',
#         'tipe' : 'SPORT',
#         'stock': 2,
#         'harga': 2000000
#     },
#     {
#         'kode' : 'm6' ,
#         'nama': 'Kawasaki Z800',
#         'tipe' : 'SPORT',
#         'stock': 5,
#         'harga': 1300000
#     },
#     {
#         'kode' : 'm7' ,
#         'nama': 'Kawasaki Versys 650 cc',
#         'tipe' : 'SPORT',
#         'stock': 5,
#         'harga': 1200000
#     }
# ]

# hasil_pencarian = 'm3'

# def searchByKode(hasil_pencarian):
#     tempArr = []
#     for i in range(len(list_RentalMotor)):
#         if hasil_pencarian == list_RentalMotor[i]['kode']:
#             tempArr = list_RentalMotor[i]
#     print(tempArr)

# def updateByCode(hasil_pencarian):
#     for i in range(len(list_RentalMotor)):
#         if hasil_pencarian == list_RentalMotor[i]['kode']:
#             tempIndex = i
#     update_data = str(input('')).lower()
#     if update_data == 'kode' or update_data == 'nama' or update_data == 'tipe':
#         update_change = str(input(''))
#     elif update_data == 'stock' or update_data == 'harga':
#         update_change = int(input(''))
#     list_RentalMotor[tempIndex][update_data] = update_change
#     print(tabulate.tabulate(list_RentalMotor,headers= 'keys', tablefmt='fancy_grid'))


            
# updateByCode(hasil_pencarian)
# searchByKode(hasil_pencarian)

# def updateByKode():
#     tempArr = []
#     for i in range(len(list_RentalMotor)):
#         if hasil_pencarian == list_RentalMotor[i]['kode']:
#             tempArr.append(list_RentalMotor[i])
#             break

#     # print(tempArr[0].nama)
#     tempArr[0]['nama'] = "Immanuel Joshua Janis"
#     print(tempArr)

# updateByKode()

list_RentalMotor = [
    {'kode': 'm1', 'nama': 'HD Softiel Classic', 'tipe': 'SPORT', 'stock': 2, 'harga': 3000000},
    {'kode': 'm2', 'nama': 'HD Street 500 cc', 'tipe': 'SPORT', 'stock': 5, 'harga': 1300000},
    {'kode': 'm3', 'nama': 'BMW F800GS', 'tipe': 'SPORT', 'stock': 2, 'harga': 2000000},
    {'kode': 'm4', 'nama': 'BWM G310', 'tipe': 'SPORT', 'stock': 5, 'harga': 1200000},
    {'kode': 'm5', 'nama': 'Kawasaki Z900', 'tipe': 'SPORT', 'stock': 2, 'harga': 2000000},
    {'kode': 'm6', 'nama': 'Kawasaki Z800', 'tipe': 'SPORT', 'stock': 5, 'harga': 1300000},
    {'kode': 'm7', 'nama': 'Kawasaki Versys 650 cc', 'tipe': 'SPORT', 'stock': 5, 'harga': 1200000}
]

def search_by_code(code):
    result = [bike for bike in list_RentalMotor if bike['kode'] == code]
    if result:
        print(tabulate.tabulate(result, headers='keys', tablefmt='fancy_grid'))
    else:
        print("Bike not found.")

def update_by_code(code):
    bike = next((bike for bike in list_RentalMotor if bike['kode'] == code), None)
    if bike:
        update_data = input('Enter the field to update: ').lower()
        if update_data in ('kode', 'nama', 'tipe'):
            update_change = input('Enter the new value: ')
        elif update_data in ('stock', 'harga'):
            update_change = int(input('Enter the new value: '))
        bike[update_data] = update_change
        print(tabulate.tabulate(list_RentalMotor, headers='keys', tablefmt='fancy_grid'))
    else:
        print("Bike not found.")

# Input for search code
search_code = input("Enter the bike code to search: ")
search_by_code(search_code)
update_by_code(search_code)