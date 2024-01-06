from django.contrib import admin
from todo.models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ("title","description","completed")


#Registor model
admin.site.register(Todo, TodoAdmin)