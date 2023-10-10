def searchInMatrix(matriz, objetivo):
  horizontal = len(matriz[0])
  vertical = len(matriz)
  dy = 0
  dx = 0
  while True:
      if matriz[dy-1][0] <= objetivo and matriz[dy-1][horizontal - 1] >= objetivo:
          break
      elif dy != vertical:
          dy += 1
      else:
          return False
  while True:
      if matriz[dy-1][dx -1] <= objetivo and matriz[dy-1][dx -1] >= objetivo:
          break
      elif dx != horizontal:
          dx += 1
      else:
          return False
  return True

matriz = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60],
]
print(matriz)

response = searchInMatrix(matriz, 3)
print(response)

response2 = searchInMatrix(matriz, 61)
print(response2)

response3 = searchInMatrix(matriz, 13)
print(response3)

response3 = searchInMatrix(matriz, 60)
print(response3)
