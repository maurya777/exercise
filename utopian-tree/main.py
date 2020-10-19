total_tests = int(input())
def utopianHeight(x,y): 
    if y % 2 == 0:
        return x * 2 
    else:
        return x + 1

while total_tests > 0:
    total_tests = total_tests -1
    n = int(input())
    print reduce(utopianHeight, range(0,n), 1)