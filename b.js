if (Meteor.isClient) {
  Blaze.Template.registerHelper("striptags", function(){

    return new Template('striptags', function () {
        var view = this;
        var content = '';

        if (view.templateContentBlock) {
          content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
        }
        return HTML.Raw(content);
        //return HTML.Raw(TagStripper.strip(content, self.allowedTags));
    });
  });

}
