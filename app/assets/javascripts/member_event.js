var printMemberEvent = function(memberEvent) {
$("<li>"
+ "<div class='card'>"
+ "<div class='card-content'>"
+ "<span class='card-title activator grey-text text-darken-4 event-title'>"
+ "<i class='mdi-navigation-more-vert right'></i></span>"
+ "<div class='waves-effect waves-block waves-light col s3'>"
+ "<p>"
+ "<a href='http://github.com/"
+ memberEvent.actor.login
+ "'>"
+ "<img class='circle img-avatar' src="
+ memberEvent.actor.avatar_url
+ ">"
+ "</a>"
+ "<div class='col s8'>"
+ timeSince(new Date(Date.parse(memberEvent.created_at)))
+ " ago"
+ "</div>"
+ "</div>"
+ "</p>"
+ "<h5>"
+ "<a href='http://github.com/"
+ memberEvent.actor.login
+ "'>"
+ memberEvent.actor.login
+ "</a>"
+ " - "
+ "added "
+ "<a href='http://github.com/"
+ memberEvent.payload.member.login
+ "'>"
+ memberEvent.payload.member.login
+ "</a>"
+ " as a member of the "
+ memberEvent.repo.name
+ " repository"
+ "</h5>"
+ "<div class='col s9 offest-s3 v-align'>"
+ "<p>"
+  "Repository: "
+ "<a href='http://github.com/"
+ memberEvent.repo.name
+ "'>"
+ memberEvent.repo.name
+ "</a>"
+ "</p>"
+ "</div>"
+ "</div>"
+ "<div class='card-reveal'>"
+ "<span class='card-title grey-text text-darken-4'>"
+ "Card event info placeholder" //fix this
+ "<i class='mdi-navigation-close right'></i>"
+ "</span>"
+ "<p>"
+ "Here is a placeholder paragraph. And another sentence. And another sentence. And another sentence. And another sentence."
+ "</p>"
+ "</div>"
+ "</li>").appendTo(".event-feed-list");
};