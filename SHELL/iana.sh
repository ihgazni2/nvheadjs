#https://www.iana.org/assignments/message-headers/message-headers.xhtml

wget https://www.iana.org/assignments/message-headers/content-translation-type-header-field-values.csv
wget https://www.iana.org/assignments/message-headers/prov-headers.csv
wget https://www.iana.org/assignments/message-headers/perm-headers.csv



efdir_csv2cols content-translation-type-header-field-values.csv
efdir_csv2cols perm-headers.csv
efdir_csv2cols prov-headers.csv


efdir_csv2dtb content-translation-type-header-field-values.csv
efdir_csv2dtb perm-headers.csv
efdir_csv2dtb prov-headers.csv

#efdir_csv2jsd
