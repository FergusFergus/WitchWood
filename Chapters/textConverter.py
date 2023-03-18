def main():
    filename = input("Enter file to be read: ")
    readFile = open(filename,"r")

    filename2 = input("Enter target file name: ")
    writeFile = open(filename2,"w")
    
    for line in readFile:
        newline = "<p>" + line + "</p>"
        #print(newline)
        writeFile.write(newline)

main()
